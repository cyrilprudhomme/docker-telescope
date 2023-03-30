import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContainersPage} from './containers.page';

const routes: Routes = [
  {
    path: '',
    component: ContainersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersPageRoutingModule {
}
