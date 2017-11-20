import { Component } from "@angular/core";
import { fadeInAnimation } from '../../_animations/fade-in.animation';


@Component({
  selector: 'app-card',
  template: `
  <div class="card-component">
    <span class="card-component__head">
      <ng-content select="[header]"></ng-content>
    </span>
    <ng-content></ng-content>
    <div class="card-component__footer">
      <a href="https://github.com/caina/angular4-timesheet-architecture" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
    </div>
  </div>`,
  styleUrls:['./card.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class Card {

  constructor(){}
}
