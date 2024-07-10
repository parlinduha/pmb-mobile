import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  {
    path: 'perkuliahan',
    loadChildren: () => import('./perkuliahan/perkuliahan.module').then( m => m.PerkuliahanPageModule)
  },
  {
    path: 'jadwal-biaya',
    loadChildren: () => import('./jadwal-biaya/jadwal-biaya.module').then( m => m.JadwalBiayaPageModule)
  },
  {
    path: 'prosedur',
    loadChildren: () => import('./prosedur/prosedur.module').then( m => m.ProsedurPageModule)
  },
  {
    path: 'persyaratan',
    loadChildren: () => import('./persyaratan/persyaratan.module').then( m => m.PersyaratanPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
