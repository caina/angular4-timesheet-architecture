import { Component } from "@angular/core";


@Component({
  selector: 'app-card',
  template: `<div class="card-component"><ng-content></ng-content></div>`,
  styleUrls:['./card.component.scss']
})
export class Card {

  constructor(){}
}
