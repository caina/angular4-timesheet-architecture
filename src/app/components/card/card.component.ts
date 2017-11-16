import { Component } from "@angular/core";


@Component({
  selector: 'app-card',
  template: `
  <div class="card-component">
  <div class="card-component__header">
    <h1><ng-content select="h1"></ng-content></h1>
  </div>
  <ng-content></ng-content>
  </div>`,
  styleUrls:['./card.component.scss']
})
export class Card {

  constructor(){}
}
