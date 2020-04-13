import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
