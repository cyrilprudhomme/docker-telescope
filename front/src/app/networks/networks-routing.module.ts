import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NetworksPage} from './networks.page';

const routes: Routes = [
  {
    path: '',
    component: NetworksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworksPageRoutingModule {
}
