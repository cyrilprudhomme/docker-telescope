import {Component, OnInit} from '@angular/core';
import {SocketIoService} from "../services/socket-io.service";
import {ToolsService} from "../services/tools.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dashboardItems: { title: string, subtitle: string, content: string }[] = [];


  constructor(public readonly socketIoService: SocketIoService, public readonly tools: ToolsService) {
    this.dashboardItems.push({
      title: 'TOTAL',
      subtitle: 'Containeur',
      content: this.socketIoService.containers.length + '/' + this.socketIoService.containers.length
    })
  }

  ngOnInit(): void {
    this.socketIoService.getListElement()
  }

}
