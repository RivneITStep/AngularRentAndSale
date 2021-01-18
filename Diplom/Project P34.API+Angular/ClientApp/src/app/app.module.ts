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
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';

/*AREAS OF USER*/
import { UserAreaComponent } from './Areas/user-area/user-area.component';

/*GARBAGE*/
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
      UserAreaComponent,

      AdminAreaComponent,
      DashboardComponent,

      /*COMPONENTS OF THE STORE*/
      CarouselComponent,
      CategoryComponent,

      SubcategoryComponent,

      ProductComponent,

      /*GARBAGE*/
      LoginComponent,
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
