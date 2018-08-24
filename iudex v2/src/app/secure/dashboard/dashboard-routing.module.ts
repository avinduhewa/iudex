import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreCompComponent } from './core-comp/core-comp.component';

const routes: Routes = [
  { path: '', component: CoreCompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
