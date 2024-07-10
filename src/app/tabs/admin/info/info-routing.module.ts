import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage
  },
  {
    path: 'add',
    loadChildren: () => import('./info-add/info-add.module').then( m => m.InfoAddPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./info-edit/info-edit.module').then( m => m.InfoEditPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
