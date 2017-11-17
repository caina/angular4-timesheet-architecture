import { Component } from "@angular/core";


@Component({
  selector: 'app-card',
  template: `
  <div class="card-component">
	<div class="card-component__header">
		<h1><ng-content select="h1"></ng-content></h1>
	</div>
	<ng-content></ng-content>
	<div class="card-component__footer">
		<a href="www.linkedin.com/in/douglascaina" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
		<a href="https://github.com/caina/angular4-timesheet-architecture" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>	
	</div>
  </div>`,
  styleUrls:['./card.component.scss']
})
export class Card {

  constructor(){}
}
