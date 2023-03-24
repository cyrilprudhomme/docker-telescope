import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DockerPageRoutingModule} from './docker-routing.module';

import {DockerPage} from './docker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DockerPageRoutingModule
  ],
  declarations: [DockerPage]
})
export class DockerPageModule {
}
