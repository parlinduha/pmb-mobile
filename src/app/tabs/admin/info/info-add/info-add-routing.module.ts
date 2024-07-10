import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAddPage } from './info-add.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAddPageRoutingModule {}
