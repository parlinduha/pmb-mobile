import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAddPageRoutingModule } from './info-add-routing.module';

import { InfoAddPage } from './info-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAddPageRoutingModule
  ],
  declarations: [InfoAddPage]
})
export class InfoAddPageModule {}
