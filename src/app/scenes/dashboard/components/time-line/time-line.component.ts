import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeLine } from './time-line'

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],
  providers: [TimeLine]
})
export class TimeLineComponent implements OnInit {

  @Output() onAccept: EventEmitter<TimeLine> = new EventEmitter<TimeLine>();

  constructor(public timeLine: TimeLine) { }

  handleConfirmationButton() {
    console.log(TimeLine);
  }

  ngOnInit() {
  }

}
