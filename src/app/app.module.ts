import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './features/home/home.component';
import { FeatureGuideModule } from './modules/features/guide.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [AppRoutingModule, FeatureGuideModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
