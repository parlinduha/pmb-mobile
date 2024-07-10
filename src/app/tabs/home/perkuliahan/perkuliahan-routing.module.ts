import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerkuliahanPage } from './perkuliahan.page';

const routes: Routes = [
  {
    path: '',
    component: PerkuliahanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerkuliahanPageRoutingModule {}
