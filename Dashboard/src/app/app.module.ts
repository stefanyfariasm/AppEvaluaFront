import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStripeModule } from "ngx-stripe"

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './inicio-sesion/login-form/login-form.component';

import { BodyComponent } from './main-wind/body/body.component';
import { SidenavComponent } from './main-wind/sidenav/sidenav.component';
import { EtiquetaComponent } from './main-wind/etiqueta/etiqueta.component';
import { FormulaComponent } from './main-wind/formula/formula.component';
import { EvaluaComponent } from './main-wind/evalua/evalua.component';
import { DocumentaComponent } from './main-wind/documenta/documenta.component';
import { GestionaComponent } from './main-wind/gestiona/gestiona.component';
import { AnalizaComponent } from './main-wind/analiza/analiza.component';
import { LimpiaComponent } from './main-wind/limpia/limpia.component';
import { ControlaComponent } from './main-wind/controla/controla.component';
import { AuditaComponent } from './main-wind/audita/audita.component';
import { EducaComponent } from './main-wind/educa/educa.component';
import { PiensaDiseniaComponent } from './main-wind/piensa-disenia/piensa-disenia.component';
import { CocinaComponent } from './main-wind/cocina/cocina.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ReiniciarPasswordComponent } from './inicio-sesion/reiniciar-password/reiniciar-password.component';
import { MainWindComponent } from './main-wind/main-wind.component';
import { RegisterUserComponent } from './inicio-sesion/register-user/register-user.component';
import { PayplanComponent } from './main-wind/payplan/payplan.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SublevelMenuComponent } from './main-wind/sidenav/sublevel-menu.component';
import { ProfileComponent } from './main-wind/profile/profile.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './main-wind/home/home.component';
import { StripecheckoutComponent } from './main-wind/stripecheckout/stripecheckout.component';
import { LogoutComponent } from './main-wind/logout/logout.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ElegirPlanComponent } from './main-wind/elegir-plan/elegir-plan.component';
import { DatosFacturacionComponent } from './main-wind/datos-facturacion/datos-facturacion.component';
import { CodigoVerificacionComponent } from './inicio-sesion/codigo-verificacion/codigo-verificacion.component';
import { NewPasswordComponent } from './inicio-sesion/new-password/new-password.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment';

/*Google Login*/
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { RealizarPagoComponent } from './main-wind/realizar-pago/realizar-pago.component';
/*Google Login*/

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    LoginFormComponent,
    BodyComponent,
    SidenavComponent,
    EtiquetaComponent,
    FormulaComponent,
    EvaluaComponent,
    DocumentaComponent,
    GestionaComponent,
    AnalizaComponent,
    LimpiaComponent,
    ControlaComponent,
    AuditaComponent,
    EducaComponent,
    PiensaDiseniaComponent,
    CocinaComponent,

    ReiniciarPasswordComponent,
      MainWindComponent,
      RegisterUserComponent,
      PayplanComponent,
      SublevelMenuComponent,
      ProfileComponent,
      HomeComponent,
      StripecheckoutComponent,
      LogoutComponent,
      ElegirPlanComponent,
      DatosFacturacionComponent,
      CodigoVerificacionComponent,
      NewPasswordComponent,
      RealizarPagoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    PopoverModule.forRoot(),
    MatTabsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    NgxStripeModule.forRoot(environment.stripe_pk),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    SocialLoginModule


  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1073774487806-759tdp8njcndpdl6fghursjtekp7lo4s.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
