import { NgModule } from '@angular/core';

import { CallBtnComponent } from './components';

const components = [
  CallBtnComponent,
]

@NgModule({
  declarations: [
    components,
  ],
  exports: [
    components,
  ]
})
export class SharedModule { }
