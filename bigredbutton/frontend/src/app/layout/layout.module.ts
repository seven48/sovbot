import { NgModule } from '@angular/core';

import { HomeView } from './views';
import { CallBtnComponent } from './components';



@NgModule({
  declarations: [
    HomeView,
    CallBtnComponent,
  ],
  exports: [
    HomeView,
  ],
})
export class LayoutModule {}
