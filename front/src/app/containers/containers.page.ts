import {Component, OnInit} from '@angular/core';
import {ContainerInfo} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-containers',
  templateUrl: './containers.page.html',
  styleUrls: ['./containers.page.scss'],
})
export class ContainersPage implements OnInit {
  isModalDetailsOpen = false;
  itemSelected!: ContainerInfo;

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService, private actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit(): void {
  }

  async optionActionSheet(container: ContainerInfo) {
    // this.dockerIOService.socket.emit('action:restart',container.Id)
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      // subHeader: 'Example subheader',
      buttons: [
        // {
        //   text: 'Delete',
        //   role: 'destructive',
        //   data: {
        //     action: 'delete',
        //   },
        // },
        {
          text: 'Infos',
          data: {
            action: 'infos',
          },
          icon: 'information-outline'
        },
        {
          text: 'Restart',
          data: {
            action: 'restart',
          },
          icon: 'reload-outline'
        },
        {
          text: 'Annuler',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          icon: 'arrow-undo-outline',
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    switch (result.data.action) {
      case 'infos':
        this.setOpenDetails(true)
        break
      case 'restart':
        this.dockerIOService.socket.emit('action:restart', container.Id)
        break
      case 'remove':
        this.dockerIOService.socket.emit('action:remove', container.ImageID)
        break
    }
    console.log(JSON.stringify(result, null, 2))
  }

  setOpenDetails(isOpen: boolean) {
    this.isModalDetailsOpen = isOpen;
  }

}
