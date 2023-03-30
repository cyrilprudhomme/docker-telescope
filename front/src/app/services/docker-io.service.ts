import {Injectable} from '@angular/core';
import {ContainerInfo, ImageInfo, NetworksInfos, VolumesInfos} from "./model";
import {environment} from "../../environments/environment";
import {io} from "socket.io-client";
import {ToolsService} from "./tools.service";

@Injectable({
  providedIn: 'root'
})
export class DockerIOService {
  containers: ContainerInfo[] = []
  images: ImageInfo[] = []
  volumes: VolumesInfos[] = []
  networks: NetworksInfos[] = []
  socket = io()

  constructor(private toolsService: ToolsService) {
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

  cleanUnusedImage() {
    this.socket.emit("image:remove");
  }


}
