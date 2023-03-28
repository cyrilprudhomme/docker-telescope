import {Component, OnInit} from '@angular/core';
import {NetworksInfos} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-networks',
  templateUrl: './networks.page.html',
  styleUrls: ['./networks.page.scss'],
})
export class NetworksPage implements OnInit {
  isModalDetailsOpen = false;
  itemSelected!: NetworksInfos;

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService) {
  }

  ngOnInit(): void {
  }

  setOpenContainerDetails(isOpen: boolean) {
    this.isModalDetailsOpen = isOpen;
  }

}
