import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatCardModule } from './cat-card/cat-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
