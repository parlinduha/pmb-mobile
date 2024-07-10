import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProsedurPageRoutingModule } from './prosedur-routing.module';

import { ProsedurPage } from './prosedur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProsedurPageRoutingModule
  ],
  declarations: [ProsedurPage]
})
export class ProsedurPageModule {}
