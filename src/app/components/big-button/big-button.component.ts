import { Component, Input, EventEmitter, Output  } from "@angular/core";

@Component({
  selector: 'app-big-button',
  template: `<button class='big-button' (click)="onButtonClick()"><ng-content></ng-content></button>`,
  styleUrls: ['big-button.component.scss']
})
export class BigButton {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  onButtonClick() {
    this.onClick.emit();
  }

}
