import {Component, OnInit} from '@angular/core';
import {VolumesInfos} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.page.html',
  styleUrls: ['./volumes.page.scss'],
})
export class VolumesPage implements OnInit {
  isModalDetailsOpen = false;
  itemSelected!: VolumesInfos;

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService) {
  }

  ngOnInit(): void {
  }

  setOpenDetails(isOpen: boolean) {
    this.isModalDetailsOpen = isOpen;
  }

}
