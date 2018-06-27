import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './inscription/connexion/connexion.component';
import { InscConComponent } from './insc-con/insc-con.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    AccountComponent,
    InscriptionComponent,
    ConnexionComponent,
    InscConComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
