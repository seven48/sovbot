import { MembersResolver } from './../core/resolvers/members.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeView } from '@app/layout/views';

import { GlobalView } from './global.view';
import { RoomSettingsResolver } from '@app/core/resolvers';

const routes: Routes = [
  {
    path: '',
    component: GlobalView,
    children: [
      {
        path: '',
        component: HomeView,
        resolve: {
          members: MembersResolver,
          roomSettings: RoomSettingsResolver,
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    MembersResolver,
    RoomSettingsResolver,
  ],
  exports: [RouterModule],
})
export class GlobalRoutingModule {}
