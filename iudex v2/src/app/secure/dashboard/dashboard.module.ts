import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreCompComponent } from './core-comp/core-comp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncateModule } from 'ng2-truncate';
import { NgSelectModule } from '@ng-select/ng-select';
import { CountdownTimerModule } from 'ngx-countdown-timer';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    TruncateModule,
    NgSelectModule,
    CountdownTimerModule.forRoot()
  ],
  declarations: [
    CoreCompComponent,
  ]
})
export class DashboardModule { }
