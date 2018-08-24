import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreCompComponent } from './core-comp/core-comp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    TruncateModule
  ],
  declarations: [
    CoreCompComponent,
  ]
})
export class DashboardModule { }
