import {Injectable} from '@angular/core';
import {ContainerInfo, ImageInfo, NetworksInfos, VolumesInfos} from "./model";
import {environment} from "../../environments/environment";
import {io} from "socket.io-client";
import {ToolsService} from "./tools.service";
import {ActionSheetController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class DockerIOService {
  containers: ContainerInfo[] = []
  images: ImageInfo[] = []
  volumes: VolumesInfos[] = []
  networks: NetworksInfos[] = []
  socket = io()

  constructor(private toolsService: ToolsService, private actionSheetCtrl: ActionSheetController,) {
    if (!environment.production) {
      this.socket = io("http://ucf-ljenias101.siu.central:3000")
    }
    this.socket.on("error", (arg) => {
      this.toolsService.presentToast(arg, "danger", null)
    });
    this.socket.on("response", (arg) => {
      this.toolsService.presentToast(arg, "success", null)
    });
    this.socket.on("containersList", (arg: ContainerInfo[]) => {
      this.containers = arg
    });
    this.socket.on("imagesList", (arg: ImageInfo[]) => {
      this.images = arg
    });
    this.socket.on("volumesList", (arg: { Volumes: VolumesInfos[] }) => {
      this.volumes = arg.Volumes
    });
    this.socket.on("networksList", (arg: NetworksInfos[]) => {
      this.networks = arg
    });
    this.socket.emit("metrics:list");
  }

  getListElement() {
    this.socket.emit("metrics:list");
  }

  cleanUnusedElement() {
    this.socket.emit("action:pruneimage");
  }

  async optionContainerActionSheet(container: ContainerInfo) {
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
          text: 'Restart',
          data: {
            action: 'restart',
          },
        },
        {
          text: 'Annuler',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    switch (result.data.action) {
      case 'restart':
        this.socket.emit('action:restart', container.Id)
        break
      case 'restart':
        this.socket.emit('action:remove', container.ImageID)
        break
    }
    console.log(JSON.stringify(result, null, 2))
  }

  async optionImagesActionSheet(image: ImageInfo) {
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
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Annuler',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    switch (result.data.action) {
      case 'delete':
        this.socket.emit('action:remove', image.Id)
        break
    }
    console.log(JSON.stringify(result, null, 2))
  }
}
