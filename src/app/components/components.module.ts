import { NgModule } from '@angular/core';
import { Button } from './button/button.component';
import { Card } from './card/card.component';
import { BigButton } from './big-button/big-button.component';
import { TimeInputComponent } from './time-input/time-input.component';

export const COMPONENTS = [
  Button,
  Card,
  BigButton,
  TimeInputComponent,
]

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule { }
