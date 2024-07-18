import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchesPageComponent } from './switches-page.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchesRoutingModule { }
