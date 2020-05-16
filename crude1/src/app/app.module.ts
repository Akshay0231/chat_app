import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { socketcomm } from 'socketcomm.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    socketcomm
  ],
  providers: [socketcomm],
  bootstrap: [AppComponent]
})
export class AppModule { }
