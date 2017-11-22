import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-time-input',
  template: `
  <span>
    <label for="{{id}}"><ng-content></ng-content></label>
    <input #time
      type="text"
      (input)="sendTime(time.value)"
      placeholder="{{placeholder}}"
      value="{{initialValue}}"
      id="{{id}}" />
  </span>
  `,
  styleUrls:['./time-input.component.scss'],
})
export class TimeInputComponent {

  @Input() public id: string;
  @Input() public placeholder: string;
  @Input() initialValue:string;
  @Output() timeValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  sendTime(time: string): void {
    this.timeValue.emit(time);
  }
}
