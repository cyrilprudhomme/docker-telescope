import {Component, OnInit} from '@angular/core';
import {ImageInfo} from "../services/model";
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  isModalImageDetailsOpen = false;
  imageSelected!: ImageInfo;

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService) {
  }

  ngOnInit(): void {
  }

  setOpenImageDetails(isOpen: boolean) {
    this.isModalImageDetailsOpen = isOpen;
  }

}
