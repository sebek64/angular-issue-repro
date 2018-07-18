import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DisplayerComponent} from "./displayer.component";
import {EmitterComponent} from "./emitter.component";

@NgModule({
  declarations: [
    AppComponent,
    EmitterComponent,
    DisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
