import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';

import { SecureComponent } from './secure.component';

import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    SecureRoutingModule,
    NavBarModule,
    DashboardModule
  ],
  declarations: [
    SecureComponent
  ]
})
export class SecureModule { }
