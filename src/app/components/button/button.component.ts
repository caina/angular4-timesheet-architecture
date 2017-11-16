import { Component, Input, EventEmitter, Output  } from "@angular/core";

@Component({
  selector: 'app-button',
  template: `
  <span class='button-holder'>
    <button class='btn' (click)="onButtonClick()">
      <ng-content></ng-content>
    </button>
  </span>`,
  styleUrls: ['./button.component.scss']
})
export class Button {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(){}

  onButtonClick() {
    this.onClick.emit();
  }
}
