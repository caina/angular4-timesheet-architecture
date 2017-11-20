import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  template: `
  <app-card>

    <h1>Architecture example</h1>

    <p>
      this is an Angular 4 architecture example
    </p>

  </app-card>
  `
})
export class AboutComponent {

  constructor() { }

}
