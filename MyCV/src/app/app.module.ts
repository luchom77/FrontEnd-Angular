import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppAboutMeComponent } from './components/app-about-me/app-about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { AppPortafolioComponent } from './components/app-portafolio/app-portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppMenuComponent,
    AppAboutMeComponent,
    ServicesComponent,
    AppPortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
