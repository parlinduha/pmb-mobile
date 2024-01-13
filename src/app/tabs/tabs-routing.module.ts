import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guard/auth.guard';

// Rute untuk peran "student"
const studentRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'registration-form-student',
        loadChildren: () =>
          import(
            './registration-form-student/registration-form-student.module'
          ).then((m) => m.RegistrationFormStudentPageModule),
        canActivate: [AuthGuard],
        data: { roles: ['student'] },
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
        data: { roles: ['student'] },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
        canActivate: [AuthGuard],
        data: { roles: ['student'] },
      },
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoPageModule),
        canActivate: [AuthGuard],
        data: { roles: ['student'] },
      },
      {
        path: 'help',
        loadChildren: () =>
          import('./help/help.module').then((m) => m.HelpPageModule),
        canActivate: [AuthGuard],
        data: { roles: ['student'] },
      },
    ],
  },
];

// Rute untuk peran "admin"
const adminRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'admin/home',
        loadChildren: () =>
          import('./admin/home/home.module').then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'admin/profile',
        loadChildren: () =>
          import('./admin/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'admin/user',
        loadChildren: () =>
          import('./admin/user/user.module').then((m) => m.UserPageModule),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'admin/info',
        loadChildren: () =>
          import('./admin/info/info.module').then((m) => m.InfoPageModule),
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes), // Rute untuk peran "student"
    RouterModule.forChild(adminRoutes), // Rute untuk peran "admin"
  ],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
