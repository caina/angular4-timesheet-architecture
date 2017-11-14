import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component'
import { TimeLineComponent } from './components/time-line/time-line.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
  ],
  declarations: [
    TimeLineComponent,
    DashboardComponent,
  ]
})
export class DashboardModule { }
