import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersyaratanPageRoutingModule } from './persyaratan-routing.module';

import { PersyaratanPage } from './persyaratan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersyaratanPageRoutingModule
  ],
  declarations: [PersyaratanPage]
})
export class PersyaratanPageModule {}
