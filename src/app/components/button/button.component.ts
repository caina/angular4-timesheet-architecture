import { Component, Input, EventEmitter, Output  } from "@angular/core";

@Component({
  selector: 'app-button',
  template: `<button class='btn' (click)="onButtonClick()"><ng-content></ng-content></button>`
})
export class Button {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(){}

  onButtonClick() {
    this.onClick.emit();
  }
}
