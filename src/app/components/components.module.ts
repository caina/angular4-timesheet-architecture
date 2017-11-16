import { NgModule } from '@angular/core';
import { Button } from './button/button.component';
import { Card } from './card/card.component';
import { BigButton } from './big-button/big-button.component';

@NgModule({
  declarations: [
    Button,
    Card,
    BigButton,
  ],
  exports: [
    Button,
    Card,
    BigButton,
  ]
})
export class ComponentsModule { }
