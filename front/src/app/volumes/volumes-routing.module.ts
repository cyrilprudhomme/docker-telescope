import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VolumesPage} from './volumes.page';

const routes: Routes = [
  {
    path: '',
    component: VolumesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumesPageRoutingModule {
}
