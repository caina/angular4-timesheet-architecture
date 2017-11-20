import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import {AboutRoutingModule} from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
  ]
})
export class AboutModule { }
