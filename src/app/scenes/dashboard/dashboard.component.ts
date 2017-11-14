import { Component } from '@angular/core';
import { TimeLine } from './components/time-line/time-line';
import { TimeDifferenceService } from './time-difference.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TimeDifferenceService],
})
export class DashboardComponent {

  public totalHoras: number;

  constructor(public time: TimeDifferenceService) { }

  // place in a service
  public handleTest(timeLine: TimeLine) {
    console.log(timeLine);
    if (timeLine.dtInicio && timeLine.dtFim) {
      this.time.calculateDifference(timeLine.dtInicio, timeLine.dtFim);
    }
  }
}
