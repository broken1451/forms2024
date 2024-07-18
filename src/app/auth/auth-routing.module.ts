import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        loadChildren: () => import('./pages/register-page/register.module').then(m => m.RegisterModule),
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'sign-up'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
