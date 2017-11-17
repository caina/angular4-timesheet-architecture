import { Component, EventEmitter, Output } from '@angular/core';
import { TimeLine } from './time-line';
import { fadeInAnimation } from '../../../../_animations/fade-in.animation';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  providers: [TimeLine]
})
export class TimeLineComponent {

  @Output() onAccept: EventEmitter<TimeLine> = new EventEmitter<TimeLine>();
  public timeLine: TimeLine = new TimeLine();
  public used: boolean = false;

  constructor() { }

  public handleConfirmationButton() {
    this.used = (this.timeLine.dtInicio && this.timeLine.dtFim) !== undefined;
    this.onAccept.emit(this.timeLine)
  }
}