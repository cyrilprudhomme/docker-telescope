import {Component, OnInit, ViewChild} from '@angular/core';
import {SocketIoService} from "../services/socket-io.service";
import {ToolsService} from "../services/tools.service";
import {ContainerInfo, ImageInfo} from "../services/model";
import {IonModal} from "@ionic/angular";
import {OverlayEventDetail} from '@ionic/core/components';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.page.html',
  styleUrls: ['./docker.page.scss'],
})
export class DockerPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  isModalContainersDetailsOpen = false;
  isModalImageDetailsOpen = false;
  containerSelected!: ContainerInfo;

  imageSelected!: ImageInfo;


  constructor(public readonly socketIoService: SocketIoService, public readonly tools: ToolsService) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  open() {
    this.modal.isOpen = true
  }

  confirm() {
    this.modal.dismiss('blabla', 'confirm');

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(`Hello, ${ev.detail.data}!`);
    }
  }

  setOpenContainerDetails(isOpen: boolean) {
    this.isModalContainersDetailsOpen = isOpen;
  }

  setOpenImageDetails(isOpen: boolean) {
    this.isModalImageDetailsOpen = isOpen;
  }

}
