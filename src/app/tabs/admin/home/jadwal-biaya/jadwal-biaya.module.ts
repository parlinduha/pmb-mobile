import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalBiayaPageRoutingModule } from './jadwal-biaya-routing.module';

import { JadwalBiayaPage } from './jadwal-biaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalBiayaPageRoutingModule
  ],
  declarations: [JadwalBiayaPage]
})
export class JadwalBiayaPageModule {}
