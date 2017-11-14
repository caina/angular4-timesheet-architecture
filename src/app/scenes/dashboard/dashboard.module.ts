import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TimeLineComponent } from './components/time-line/time-line.component';
import { DashboardComponent } from './dashboard.component'
import { TimeResultComponent } from './components/time-result/time-result.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    TimeLineComponent,
    DashboardComponent,
    TimeResultComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
