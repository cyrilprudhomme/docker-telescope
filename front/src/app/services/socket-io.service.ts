import {Injectable} from '@angular/core';
import {io} from "socket.io-client";
import {ContainerInfo, ImageInfo} from "./model";

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  containers: ContainerInfo[] = []
  images: ImageInfo[] = []
  volumes = []
  networks = []
  socket = io("http://ucf-ljenias101.siu.central:3000");

  constructor() {
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
