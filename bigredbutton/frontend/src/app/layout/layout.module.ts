import { NgModule } from '@angular/core';

import { HomeView } from './views';
import { SharedModule } from '@app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HomeView,
  ],
  exports: [
    HomeView,
  ],
})
export class LayoutModule {}
