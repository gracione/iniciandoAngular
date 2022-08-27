import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GracioneComponent } from './gracione-componets/gracione.components';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    GracioneComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
