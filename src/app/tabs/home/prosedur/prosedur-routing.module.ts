import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProsedurPage } from './prosedur.page';

const routes: Routes = [
  {
    path: '',
    component: ProsedurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProsedurPageRoutingModule {}
