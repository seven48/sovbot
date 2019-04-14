import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeView } from '@app/layout/views';

import { GlobalView } from './global.view';

const routes: Routes = [
  {
    path: '',
    component: GlobalView,
    children: [
      {
        path: '',
        component: HomeView,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalRoutingModule {}
