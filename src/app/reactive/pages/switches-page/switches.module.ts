import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchesRoutingModule } from './switches-routing.module';
import { SwitchesPageComponent } from './switches-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    SwitchesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SwitchesModule { }
