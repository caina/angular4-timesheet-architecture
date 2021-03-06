import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TimeLine } from './time-line';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
  providers: [TimeLine]
})
export class TimeLineComponent {

  @Output() onAccept: EventEmitter<TimeLine> = new EventEmitter<TimeLine>();
  @Input() public timeLine: TimeLine = new TimeLine();
  @Input() public showTotal: boolean = false;
  public used: boolean = false;

  constructor() { }

  public handleConfirmationButton() {
    this.used = (this.timeLine.dtInicio && this.timeLine.dtFim) !== undefined;
    this.onAccept.emit(this.timeLine)
  }
}
