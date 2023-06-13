import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
