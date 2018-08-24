import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureComponent } from './secure.component';
import { AccessDeniedComponent } from '../shared/access-denied/access-denied.component';

import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'app',
    component: SecureComponent,
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule }, // Temporary, refer - https://github.com/angular/angular-cli/issues/10740
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', component: AccessDeniedComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
