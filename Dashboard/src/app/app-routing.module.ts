import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalizaComponent } from './main-wind/analiza/analiza.component';
import { AuditaComponent } from './main-wind/audita/audita.component';
import { CocinaComponent } from './main-wind/cocina/cocina.component';
import { ControlaComponent } from './main-wind/controla/controla.component';
import { DocumentaComponent } from './main-wind/documenta/documenta.component';
import { EducaComponent } from './main-wind/educa/educa.component';
import { EtiquetaComponent } from './main-wind/etiqueta/etiqueta.component';
import { EvaluaComponent } from './main-wind/evalua/evalua.component';
import { FormulaComponent } from './main-wind/formula/formula.component';
import { GestionaComponent } from './main-wind/gestiona/gestiona.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LimpiaComponent } from './main-wind/limpia/limpia.component';
import { PiensaDiseniaComponent } from './main-wind/piensa-disenia/piensa-disenia.component';
import { MainWindComponent } from './main-wind/main-wind.component';
import { ReiniciarPasswordComponent } from './inicio-sesion/reiniciar-password/reiniciar-password.component';
import { LoginFormComponent } from './inicio-sesion/login-form/login-form.component';
import { LoginGuard } from './guards/login.guard';
import { UserComponent } from './main-wind/user/user.component';
import { PayplanComponent } from './main-wind/payplan/payplan.component';
import { RegisterUserComponent } from './inicio-sesion/register-user/register-user.component';
import { HomeComponent } from './main-wind/home/home.component';
import { CodigoVerificacionComponent } from './inicio-sesion/codigo-verificacion/codigo-verificacion.component';
import { NewPasswordComponent } from './inicio-sesion/new-password/new-password.component';
import { NewPasswordGuard } from './guards/new-password.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {path: 'login', component: InicioSesionComponent,
    //data: {reload: true},
    canActivate: [HomeGuard],
    children: [
      {path: '', redirectTo: 'ingreso', pathMatch: 'full'},
      {path: 'ingreso', component: LoginFormComponent},
      {path: 'recuperar-password', component: ReiniciarPasswordComponent},
      {path: 'registrar', component: RegisterUserComponent},
      {path: 'verificar', component: CodigoVerificacionComponent, canActivate:[NewPasswordGuard]},
      {path: 'new-password', component: NewPasswordComponent, canActivate:[NewPasswordGuard]}
    ]
  },
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'dashboard', component: MainWindComponent, canActivate:[LoginGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'etiqueta', component: EtiquetaComponent},
      {path: 'formula', component: FormulaComponent},
      {path: 'evalua', component: EvaluaComponent},
      {path: 'documenta', component: DocumentaComponent},
      {path: 'gestiona', component: GestionaComponent},
      {path: 'analiza', component: AnalizaComponent},
      {path: 'limpia', component: LimpiaComponent},
      {path: 'controla', component: ControlaComponent},
      {path: 'audita', component: AuditaComponent},
      {path: 'educa', component: EducaComponent},
      {path: 'piensaDisenia', component: PiensaDiseniaComponent},
      {path: 'cocina', component: CocinaComponent},
      {
        path: 'usuario',
        loadChildren:() => import('./main-wind/user/user.module').then(m => m.UserModule)
      },
      //{path: 'miplan', component: PayplanComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
