import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GlobalRoutingModule } from './global-routing.module';

import { GlobalView } from './global.view';
import { LayoutModule } from '@app/layout/layout.module';

@NgModule({
  imports: [CommonModule, LayoutModule, GlobalRoutingModule],
  declarations: [GlobalView],
})
export class GlobalModule {}
