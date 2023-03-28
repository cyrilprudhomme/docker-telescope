import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {VolumesPageRoutingModule} from './volumes-routing.module';

import {VolumesPage} from './volumes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolumesPageRoutingModule
  ],
  declarations: [VolumesPage]
})
export class VolumesPageModule {
}
