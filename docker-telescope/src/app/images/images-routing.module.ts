import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ImagesPage} from './images.page';

const routes: Routes = [
  {
    path: '',
    component: ImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesPageRoutingModule {
}
