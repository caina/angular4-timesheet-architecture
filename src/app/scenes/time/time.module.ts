import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TimeLineComponent } from './components/time-line/time-line.component';
import { TimeResultComponent } from './components/time-result/time-result.component';

import {ComponentsModule} from './../../components/components.module';
import { TimeRoutingModule } from './time-routing.module';
import { AppModule } from '../../app.module';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { TimeHistoryComponent } from './time-history/time-history.component';

@NgModule({
  declarations: [
    TimeLineComponent,
    TimeResultComponent,
    TimeSheetComponent,
    TimeHistoryComponent
  ],
  entryComponents:[
	TimeLineComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    TimeRoutingModule,
    ComponentsModule,
  ]
})
export class TimeModule { }
