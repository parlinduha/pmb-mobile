import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoEditPageRoutingModule } from './info-edit-routing.module';

import { InfoEditPage } from './info-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoEditPageRoutingModule
  ],
  declarations: [InfoEditPage]
})
export class InfoEditPageModule {}
