import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CallBtnComponent } from './components/call-btn/call-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    CallBtnComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
