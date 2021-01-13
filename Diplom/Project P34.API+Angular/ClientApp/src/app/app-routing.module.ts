import { UserEditComponent } from './Areas/admin-area/Components/user-manager/user-edit/user-edit.component';

import { NotLoginGuard } from './guards/notLogin.guard';
import { AdminGuard } from './guards/admin.guard';



import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';

import { NotFoundComponent } from './NotFound/NotFound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { FlatComponent } from './Flats/flat/flat.component';
import { FlatManagementComponent } from './Flats/flat-management/flat-management.component';
import { AllFlatsMenuComponent } from './Flats/all-flats-menu/all-flats-menu.component';
import { SoldFlatsListComponent } from './Flats/sold-flats-list/sold-flats-list.component';
import { EditFlatComponent } from './Flats/all-flats-menu/edit-flat/edit-flat.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [NotLoginGuard] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [NotLoginGuard]  },
  { path: 'news', component: NewsComponentComponent, pathMatch: 'full' },
  { path: 'flat', component: FlatComponent, pathMatch: 'full', canActivate: [AdminGuard] },
  { path: 'emptyflats', component: FlatManagementComponent, pathMatch: 'full', canActivate: [AdminGuard] },
  { path: 'allflats', component: AllFlatsMenuComponent, pathMatch: 'full', canActivate: [AdminGuard] },
  { path: 'soldflats', component: SoldFlatsListComponent, pathMatch: 'full', canActivate: [AdminGuard] },
  { path: 'editflat/:id', component: EditFlatComponent, pathMatch: 'full', canActivate: [AdminGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full',canActivate:[NotLoginGuard] },



  {
    path: 'admin-panel',
    component: AdminAreaComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'user-manager', component: UserManagerComponent, pathMatch: 'full' },
      { path: 'edit-user/:id', component: UserEditComponent, pathMatch: 'full' }
    ]
  },




  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
