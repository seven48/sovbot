import { NgModule } from '@angular/core';

import { HomeView } from './views';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
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
