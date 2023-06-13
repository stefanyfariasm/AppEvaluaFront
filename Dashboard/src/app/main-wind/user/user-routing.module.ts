import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { PayplanComponent } from '../payplan/payplan.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {
    path: 'miplan',
    component: PayplanComponent
  },
  {
    path: 'miperfil',
    component: ProfileComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
