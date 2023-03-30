import {Component, OnInit} from '@angular/core';
import {VolumesInfos} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.page.html',
  styleUrls: ['./volumes.page.scss'],
})
export class VolumesPage implements OnInit {
  isModalDetailsOpen = false;
  itemSelected!: VolumesInfos;

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService, private actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit(): void {
  }

  async optionActionSheet(volume: VolumesInfos) {
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
      case 'remove':
        this.dockerIOService.socket.emit('volume:remove', volume.Name)
        break
    }
    console.log(JSON.stringify(result, null, 2))
  }

  setOpenDetails(isOpen: boolean) {
    this.isModalDetailsOpen = isOpen;
  }

}
