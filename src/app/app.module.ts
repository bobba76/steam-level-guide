import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { FeatureGuideModule } from './components/guide/guide.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [AppRoutingModule, FeatureGuideModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
