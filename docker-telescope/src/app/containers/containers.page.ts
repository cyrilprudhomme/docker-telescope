import {Component, OnInit} from '@angular/core';
import {ContainerInfo} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-containers',
  templateUrl: './containers.page.html',
  styleUrls: ['./containers.page.scss'],
})
export class ContainersPage implements OnInit {
  isModalContainersDetailsOpen = false;
  containerSelected!: ContainerInfo;


  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService) {
  }

  ngOnInit(): void {
  }

  setOpenContainerDetails(isOpen: boolean) {
    this.isModalContainersDetailsOpen = isOpen;
  }

}