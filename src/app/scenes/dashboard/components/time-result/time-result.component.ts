import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-time-result',
  template: `<div classs="timer-result">Total: {{tempo}} </div>`,
  styles: ['']
})
export class TimeResultComponent {

  @Input() tempo: number = 0;

  constructor() { }
}
