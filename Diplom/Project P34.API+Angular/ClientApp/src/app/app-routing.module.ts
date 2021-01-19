/*MAIN PAGE*/
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

/*FOOTER COMPONENTS*/
//INFO
import { AboutUsComponent } from './footer/Components/INFO/about-us/about-us.component';
import { FaqComponent } from './footer/Components/INFO/faq/faq.component';
import { PaymentAndDeliveryComponent } from './footer/Components/INFO/payment-and-delivery/payment-and-delivery.component';
import { TableOfSizesComponent } from './footer/Components/INFO/table-of-sizes/table-of-sizes.component';

//SERVS
import { ContactsComponent } from './footer/Components/SERVS/contacts/contacts.component';
import { ReturnComponent } from './footer/Components/SERVS/return/return.component';

//ADDITIONAL
import { WatchesProductsComponent } from './footer/Components/ADDITIONAL/watches-products/watches-products.component';

//PRIVATE ROOM
import { HistoryOfOrdersComponent } from './footer/Components/PRIVATE ROOM/history-of-orders/history-of-orders.component';
import { MainRoomComponent } from './footer/Components/PRIVATE ROOM/main-room/main-room.component';
import { WishListComponent } from './footer/Components/PRIVATE ROOM/wish-list/wish-list.component';

/*AUTHORIZATION*/
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

/*ADDITIONAL SOURCES*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*GUARDS*/
import { NotLoginGuard } from './guards/notLogin.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

/*ADMIN AREA*/
import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { EditProductComponent } from './Areas/admin-area/Components/edit-product/edit-product.component';

/*USER AREA*/
import { UserAreaComponent } from './Areas/user-area/user-area.component';

/*GARBAGE*/
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //MAIN PAGE
  { path: '', component: HomeComponent, pathMatch: 'full'},

  /*FOOTER COMPONENTS*/
  //INFO
  { path: 'aboutUs', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'paymentAndDelivery', component: PaymentAndDeliveryComponent, pathMatch: 'full' },
  { path: 'tableOfSizes', component: TableOfSizesComponent, pathMatch: 'full' },

  //SERVS
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'return', component: ReturnComponent, pathMatch: 'full' },

  //ADDITIONAL
  { path: 'watchesProducts', component: WatchesProductsComponent, pathMatch: 'full' },

  //PRIVATE ROOM
  //(IN USER AREA)

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
      { path: 'editProduct/:id', component: EditProductComponent, pathMatch: 'full' },
    ]
  },

  //USER AREA
  {
    path: 'user-area',
    component: UserAreaComponent,
    canActivate: [AuthGuard],
    children: [
      //PRIVATE ROOM
      { path: 'historyOfOrders', component: HistoryOfOrdersComponent, pathMatch:'full' },
      { path: 'personalRoom', component: MainRoomComponent, pathMatch: 'full' },
      { path: 'wishlist', component: WishListComponent, pathMatch: 'full' },
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
