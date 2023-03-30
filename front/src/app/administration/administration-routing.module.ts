import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdministrationPage} from './administration.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationPageRoutingModule {
}
