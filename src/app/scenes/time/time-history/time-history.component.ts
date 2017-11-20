import { Component } from '@angular/core';
import { TimeDifferenceService } from '../time-sheet/time-difference.service';

@Component({
  selector: 'app-time-history',
  templateUrl: './time-history.component.html',
  styleUrls: ['./time-history.component.scss']
})
export class TimeHistoryComponent {

  constructor(public time: TimeDifferenceService) { }

}
