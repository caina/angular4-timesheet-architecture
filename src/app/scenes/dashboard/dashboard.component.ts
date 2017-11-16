import { Component, QueryList, ContentChildren } from '@angular/core';
import { TimeLine } from './components/time-line/time-line';
import { TimeDifferenceService } from './time-difference.service';
import { TimeLineComponent } from './components/time-line/time-line.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TimeDifferenceService],
})
export class DashboardComponent {

  public totalHoras: number;

  public timeLines: TimeLine[] = [];

  constructor(public time: TimeDifferenceService) {
    this.timeLines.push(new TimeLine());
    this.timeLines.push(new TimeLine());
    this.timeLines.push(new TimeLine());
   }

  public handleTimeCalculation(timeLine: TimeLine) {
    if (timeLine.dtInicio && timeLine.dtFim) {
      this.time.calculateDifference(timeLine.dtInicio, timeLine.dtFim);
    }
  }

  public addTimeLine(): void {
    this.timeLines.push(new TimeLine());
  }

  public summarize():void {
    console.log(this.timeLines);
  }
}
