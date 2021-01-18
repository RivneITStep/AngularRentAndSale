/*MAIN PAGE*/
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

/*AUTHORIZATION*/
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

/*ADDITIONAL SOURCES*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*GUARDS*/
import { NotLoginGuard } from './guards/notLogin.guard';
import { AdminGuard } from './guards/admin.guard';

/*ADMIN AREA*/
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';

/*GARBAGE*/
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //MAIN PAGE
  { path: '', component: HomeComponent, pathMatch: 'full'},

  //AUTHORIZATION
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [NotLoginGuard]  },
  { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full',canActivate:[NotLoginGuard] },

  //GARBAGE
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [NotLoginGuard] },

  //ADMIN AREA
  {
    path: 'admin-panel',
    component: AdminAreaComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
