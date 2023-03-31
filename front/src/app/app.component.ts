import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Dashboard', url: '/dashboard', icon: 'telescope'},
    {title: 'Containers', url: '/containers', icon: 'cube'},
    {title: 'Images', url: '/images', icon: 'document-text'},
    {title: 'Volumes', url: '/volumes', icon: 'server'},
    {title: 'Networks', url: '/networks', icon: 'share-social'},
  ];
  public labels = [
    {title: 'Administration', url: 'administration', icon: 'construct'},
    {title: 'A Propos', url: 'about', icon: 'information-circle'},
  ];

  constructor() {
  }
}
