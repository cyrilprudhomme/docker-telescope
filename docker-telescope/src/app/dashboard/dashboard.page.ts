import {Component, OnInit} from '@angular/core';
import {ToolsService} from "../services/tools.service";
import {DockerIOService} from "../services/docker-io.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dashboardItems: { title: string, subtitle: string, content: string }[] = [];


  constructor(public readonly dockerIOService: DockerIOService, public readonly tools: ToolsService) {
    this.dashboardItems.push({
      title: 'TOTAL',
      subtitle: 'Containeur',
      content: this.dockerIOService.containers.length + '/' + this.dockerIOService.containers.length
    })
  }

  ngOnInit(): void {
    this.dockerIOService.getListElement()
  }

}
