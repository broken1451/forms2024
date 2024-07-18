import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./pages/basic-page/basic-page.module').then(m => m.BasicPageModule),
        pathMatch: 'full'
      },
      {
        path: 'dynamic',
        loadChildren: () => import('./pages/dynamic-page/dynamic.module').then(m => m.DynamicModule),
        pathMatch: 'full'
      },
      {
        path: 'switches',
        loadChildren: () => import('./pages/switches-page/switches.module').then(m => m.SwitchesModule),
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'basic'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
