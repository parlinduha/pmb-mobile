import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalBiayaPage } from './jadwal-biaya.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalBiayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalBiayaPageRoutingModule {}
