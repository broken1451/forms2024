import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPageRoutingModule } from './basic-page-routing.module';
import { BasicPageComponent } from './basic-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicPageComponent
  ],
  imports: [
    CommonModule,
    BasicPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class BasicPageModule { }
