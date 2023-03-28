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
      this.socket = io("http://ucf-ljenias101.siu.central:8084")
    }
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

}
