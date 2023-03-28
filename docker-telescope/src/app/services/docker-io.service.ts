import {Injectable} from '@angular/core';
import {ContainerInfo, ImageInfo, NetworksInfos, VolumesInfos} from "./model";
import {environment} from "../../environments/environment";
import {io} from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class DockerIOService {
  containers: ContainerInfo[] = []
  images: ImageInfo[] = []
  volumes: VolumesInfos[] = []
  networks: NetworksInfos[] = []
  socket = io()


  constructor() {
    if (!environment.production) {
      this.socket = io("http://ucf-lnexias101.siu.central:8084")
    }
    this.socket.on("containersList", (arg: ContainerInfo[]) => {
      this.containers = arg
    });
    this.socket.on("imagesList", (arg) => {
      this.images = arg
    });
    this.socket.on("volumesList", (arg) => {
      this.volumes = arg
    });
    this.socket.on("networksList", (arg) => {
      this.networks = arg
    });
    this.socket.emit("metrics:list");
  }

  getListElement() {
    this.socket.emit("metrics:list");
  }

}
