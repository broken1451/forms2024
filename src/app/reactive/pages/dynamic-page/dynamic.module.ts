import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicPageComponent } from './dynamic-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DynamicPageComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    ReactiveFormsModule
  ]
})
export class DynamicModule { }
