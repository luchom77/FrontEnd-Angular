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
import { AppContactComponent } from './components/app-contact/app-contact.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppMenuComponent,
    AppAboutMeComponent,
    AppServicesComponent,
    AppPortafolioComponent,
    AppTestimonialsComponent,
    AppContactComponent,
    AppFooterComponent,
    AppFormComponent,
    ButtonComponent,
    ContactCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ButtonComponent, ContactCardComponent] /*Por defecto los componentes definidos dentro de un módulo sólo son accesibles por éste. Si deseamos dejar visibles componentes, para que luego sean utilizados desde otros componentes, simplemente deberemos invocarlos en el array exports del módulo*/ 
  
})
export class AppModule {}
