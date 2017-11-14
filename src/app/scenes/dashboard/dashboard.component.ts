import * as moment from 'moment';
import { Component } from '@angular/core';
import { TimeLine } from './components/time-line/time-line';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  public totalHoras: number;

  constructor() { }

  // place in a service
  public handleTest(timeLine: TimeLine) {
    console.log(timeLine);
    if (timeLine.dtInicio && timeLine.dtFim) {
      const start = moment(timeLine.dtInicio.replace(':', ''), 'HHmmss');
      const end = moment(timeLine.dtFim.replace(':', ''), 'HHmmss');
      // save at local storage as history
      this.totalHoras = moment.duration(end.diff(start)).asHours();
    }
  }
}
