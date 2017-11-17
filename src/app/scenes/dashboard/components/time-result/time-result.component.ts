import { Component, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy } from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: 'app-time-result',
  template: `
  <div class="timer-result">
    <h2><i class="fa fa-star" aria-hidden="true"></i> {{timeInHours}}H</h2>
    <h3><i class="fa fa-clock-o" aria-hidden="true"></i> {{totalTimeDiff}}</h3>
  </div>`,
  styleUrls: ['./time-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeResultComponent implements OnChanges {

  public timeInHours: string = "0";
  public totalTimeDiff: string = "00:00";
  @Input() tempo: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tempo.currentValue) {
      const hours = changes.tempo.currentValue;

      this.timeInHours = parseFloat(hours).toPrecision(2);

      const minutes = (hours % 1) * 60; // get the decimal part of the hour
      this.totalTimeDiff = this.pad(hours) + ':' + this.pad(minutes);
    }
  }

  private pad(value) {
    return ('0' + Math.floor(value)).slice(-2);
  }

}
