import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-time-result',
  template: `<div classs="timer-result">Total: {{tempo}} </div>`,
  styles: ['']
})
export class TimeResultComponent implements OnChanges {

  @Input() tempo: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
