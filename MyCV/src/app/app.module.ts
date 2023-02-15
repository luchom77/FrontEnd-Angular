import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppAboutMeComponent } from './components/app-about-me/app-about-me.component';
import { AppServicesComponent } from './components/app-services/app-services.component';
import { AppPortafolioComponent } from './components/app-portafolio/app-portafolio.component';
import { AppTestimonialsComponent } from './components/app-testimonials/app-testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppMenuComponent,
    AppAboutMeComponent,
    AppServicesComponent,
    AppPortafolioComponent,
    AppTestimonialsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
