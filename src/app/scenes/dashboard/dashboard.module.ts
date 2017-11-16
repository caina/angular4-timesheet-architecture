import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TimeLineComponent } from './components/time-line/time-line.component';
import { DashboardComponent } from './dashboard.component'
import { TimeResultComponent } from './components/time-result/time-result.component';

import {ComponentsModule} from './../../components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HistoryComponent } from './history/history.component';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [
    TimeLineComponent,
    DashboardComponent,
    TimeResultComponent,
    HistoryComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
  ]
})
export class DashboardModule { }
