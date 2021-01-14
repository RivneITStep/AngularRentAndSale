/*ANGULAR*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n/public-api';

/*ADDITIONAL RESOURSES (SPINNER, NOTIFIER, ROUTINGS)*/
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgxSpinnerModule } from 'ngx-spinner';

/*MAIN PAGE*/
import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

/*COMPONENTS OF THE STORE*/
import { CarouselComponent } from './carousel/carousel.component';

import { CategoryComponent } from './home/category/category.component';

import { SubcategoryComponent } from './home/category/subcategory/subcategory.component';

import { ProductComponent } from './home/product/product.component';

/*AUTHORIZATION 'N' 404*/
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

/*AREAS OF ADMIN*/
import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { UserEditComponent } from './Areas/admin-area/Components/user-manager/user-edit/user-edit.component';

/*AREAS OF USER*/
import { UserAreaComponent } from './Areas/user-area/user-area.component';

/*GARBAGE*/
import { NewsComponentComponent } from './news-component/news-component.component';
import { FlatComponent } from './Flats/flat/flat.component';
import { FlatManagementComponent } from './Flats/flat-management/flat-management.component';
import { AllFlatsMenuComponent } from './Flats/all-flats-menu/all-flats-menu.component';
import { SoldFlatsListComponent } from './Flats/sold-flats-list/sold-flats-list.component';
import { EditFlatComponent } from './Flats/all-flats-menu/edit-flat/edit-flat.component';

import { LoginComponent } from './login/login.component';

registerLocaleData(en);

const notifierOptions: NotifierOptions = {
  position: { horizontal: { position: 'right' }, vertical: { position: 'top' } }
};

@NgModule({
   declarations: [
     /*MAIN PAGE*/
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      FooterComponent,

      /*AUTHORIZATION*/
      RegisterComponent,
      NotFoundComponent,
      ForgotPasswordComponent,

      /*AREAS*/
      AdminAreaComponent,
      UserAreaComponent,
      DashboardComponent,
      UserManagerComponent,
      UserEditComponent,

      /*COMPONENTS OF THE STORE*/
      CarouselComponent,
      CategoryComponent,

      SubcategoryComponent,

      ProductComponent,

      /*GARBAGE*/
      LoginComponent,
      NewsComponentComponent,
      FlatComponent,
      FlatManagementComponent,
      AllFlatsMenuComponent,
      SoldFlatsListComponent,
      EditFlatComponent,
   ],
   imports: [
      BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      NotifierModule.withConfig(notifierOptions),
      BrowserAnimationsModule,
      NgxSpinnerModule,
      DemoNgZorroAntdModule
   ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
