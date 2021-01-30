/*MAIN PAGE*/
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

/*FOOTER COMPONENTS*/
//INFO
import { AboutUsComponent } from './footer/Components/INFO/about-us/about-us.component';
import { FaqComponent } from './footer/Components/INFO/faq/faq.component';
import { TableOfSizesComponent } from './footer/Components/INFO/table-of-sizes/table-of-sizes.component';

//SERVS
import { ContactsComponent } from './footer/Components/SERVS/contacts/contacts.component';
import { ReturnComponent } from './footer/Components/SERVS/return/return.component';

//ADDITIONAL
import { WatchesProductsComponent } from './footer/Components/ADDITIONAL/watches-products/watches-products.component';

//PRIVATE ROOM
import { HistoryOfOrdersComponent } from './footer/Components/PRIVATE ROOM/history-of-orders/history-of-orders.component';
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
import { PersonalRoomComponent } from './Areas/user-area/personal-room/personal-room.component';
import { EditUserInfoComponent } from './Areas/user-area/edit-user-info/edit-user-info.component';

/*FAQ COMPONENTS*/
//ORDER
import { OrderFirstComponent } from './footer/Components/INFO/faq/Components/Order/order-first/order-first.component';
import { OrderSecondComponent } from './footer/Components/INFO/faq/Components/Order/order-second/order-second.component';
import { OrderThirdComponent } from './footer/Components/INFO/faq/Components/Order/order-third/order-third.component';

//PRODUCTS
import { ProductFirstComponent } from './footer/Components/INFO/faq/Components/Product/product-first/product-first.component';
import { ProductSecondComponent } from './footer/Components/INFO/faq/Components/Product/product-second/product-second.component';

//DELIVERY
import { DeliveryFirstComponent } from './footer/Components/INFO/faq/Components/Delivery/delivery-first/delivery-first.component';
import { DeliverySecondComponent } from './footer/Components/INFO/faq/Components/Delivery/delivery-second/delivery-second.component';
import { DeliveryThirdComponent } from './footer/Components/INFO/faq/Components/Delivery/delivery-third/delivery-third.component';
import { SupportComponent } from './footer/Components/INFO/support/support.component';

const routes: Routes = [
  //MAIN PAGE
  { path: '', component: HomeComponent, pathMatch: 'full'},

  /*FOOTER COMPONENTS*/
  //INFO
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'table-of-sizes', component: TableOfSizesComponent, pathMatch: 'full' },
  { path: 'support-request', component: SupportComponent, pathMatch: 'full' },

  //SERVS
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'return', component: ReturnComponent, pathMatch: 'full' },

  //ADDITIONAL
  { path: 'watches-products', component: WatchesProductsComponent, pathMatch: 'full' },

  //PRIVATE ROOM
  //(IN USER AREA)

  //AUTHORIZATION
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [NotLoginGuard]  },
  { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full',canActivate:[NotLoginGuard] },

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
      { path: 'wishlist', component: WishListComponent, pathMatch: 'full' },
      { path: 'personal-room', component: PersonalRoomComponent, pathMatch: 'full' },
      { path: 'edit-info', component: EditUserInfoComponent, pathMatch: 'full' },
    ]
  },

  /*FAQ COMPONENTS*/
  //ORDER
  { path: 'faq/order-first', component: OrderFirstComponent, pathMatch: 'full' },
  { path: 'faq/order-second', component: OrderSecondComponent, pathMatch: 'full' },
  { path: 'faq/order-third', component: OrderThirdComponent, pathMatch: 'full' },

  //PRODUCTS
  { path: 'faq/product-first', component: ProductFirstComponent, pathMatch: 'full' },
  { path: 'faq/product-second', component: ProductSecondComponent, pathMatch: 'full' },

  //DELIVERY
  { path: 'faq/delivery-first', component: DeliveryFirstComponent, pathMatch: 'full' },
  { path: 'faq/delivery-second', component: DeliverySecondComponent, pathMatch: 'full' },
  { path: 'faq/delivery-third', component: DeliveryThirdComponent, pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
