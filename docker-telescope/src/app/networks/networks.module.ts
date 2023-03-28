import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NetworksPageRoutingModule} from './networks-routing.module';

import {NetworksPage} from './networks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworksPageRoutingModule
  ],
  declarations: [NetworksPage]
})
export class NetworksPageModule {
}
