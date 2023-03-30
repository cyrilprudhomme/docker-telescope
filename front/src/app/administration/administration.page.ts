import {Component, OnInit} from '@angular/core';
import {DockerIOService} from "../services/docker-io.service";
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService) {
  }

  ngOnInit() {
  }

  cleanUnUsedElement() {
    this.dockerIOService.cleanUnusedImage()
    console.log('It\'s work')
  }
}
