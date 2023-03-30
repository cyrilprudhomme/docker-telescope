import {Component, OnInit} from '@angular/core';
import {ImageInfo} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  isModalDetailsOpen = false;
  itemSelected!: ImageInfo;

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService, private actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit(): void {
  }

  async optionActionSheet(image: ImageInfo) {
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
          icon: 'information-circle-outline'
        },
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon: 'trash-outline',
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
      case 'delete':
        this.dockerIOService.socket.emit('image:remove', image.Id)
        break
    }
    console.log(JSON.stringify(result, null, 2))
  }

  setOpenDetails(isOpen: boolean) {
    this.isModalDetailsOpen = isOpen;
  }

}
