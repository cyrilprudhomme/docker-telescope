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

    // {title: 'Administration', url: 'administration', icon: 'construct'},
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public labels = [{title: 'Administration', url: 'administration', icon: 'construct'},];

  constructor() {
  }
}
