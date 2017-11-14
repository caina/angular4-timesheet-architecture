import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DashboardComponent} from './dashboard.component'
import { TimeLineComponent } from './components/time-line/time-line.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TimeResultComponent } from './components/time-result/time-result.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
  ],
  declarations: [
    TimeLineComponent,
    DashboardComponent,
    TimeResultComponent,
  ]
})
export class DashboardModule { }
