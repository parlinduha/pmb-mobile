import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersyaratanPage } from './persyaratan.page';

const routes: Routes = [
  {
    path: '',
    component: PersyaratanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersyaratanPageRoutingModule {}
