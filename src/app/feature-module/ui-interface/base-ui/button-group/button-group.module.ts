import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonGroupRoutingModule } from './button-group-routing.module';
import { ButtonGroupComponent } from './button-group.component';


@NgModule({
  declarations: [
    ButtonGroupComponent
  ],
  imports: [
    CommonModule,
    ButtonGroupRoutingModule
  ]
})
export class ButtonGroupModule { }
