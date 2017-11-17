import { Component, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from "@angular/core";
import { TimeResult } from './time-result';
import { TimeResultService } from './time-result.service';

import * as moment from 'moment';

@Component({
  selector: 'app-time-result',
  template: `
  <div class="timer-result">
    <h2><i class="fa fa-star" aria-hidden="true"></i> {{timeResult.total}}H</h2>
    <h3><i class="fa fa-clock-o" aria-hidden="true"></i> {{timeResult.formated}}</h3>
  </div>`,
  styleUrls: ['./time-result.component.scss'],
  providers: [TimeResultService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeResultComponent implements OnChanges {

  public timeResult: TimeResult = new TimeResult();
  @Input() tempo: number;

  constructor(private timeResultService: TimeResultService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tempo.currentValue) {
      this.timeResult = this.timeResultService.convert(changes.tempo.currentValue)
    }
  }
}
