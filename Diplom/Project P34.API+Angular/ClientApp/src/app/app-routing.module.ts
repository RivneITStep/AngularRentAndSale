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

//PAYMENT
import { PaymentFirstComponent } from './footer/Components/INFO/faq/Components/Payment/payment-first/payment-first.component';
import { PaymentSecondComponent } from './footer/Components/INFO/faq/Components/Payment/payment-second/payment-second.component';
import { PaymentThirdComponent } from './footer/Components/INFO/faq/Components/Payment/payment-third/payment-third.component';
import { PaymentFourthComponent } from './footer/Components/INFO/faq/Components/Payment/payment-fourth/payment-fourth.component';

//GARANCY
import { GarancyFirstComponent } from './footer/Components/INFO/faq/Components/Garancy/garancy-first/garancy-first.component';
import { GarancySecondComponent } from './footer/Components/INFO/faq/Components/Garancy/garancy-second/garancy-second.component';

//PRIVATE-ROOM
import { PrivateRoomFirstComponent } from './footer/Components/INFO/faq/Components/Private room/private-room-first/private-room-first.component';
import { PrivateRoomSecondComponent } from './footer/Components/INFO/faq/Components/Private room/private-room-second/private-room-second.component';

const routes: Routes = [
  //MAIN PAGE
  { path: '', component: HomeComponent, pathMatch: 'full'},

  /*FOOTER COMPONENTS*/
  //INFO
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent, pathMatch: 'full' },
  { path: 'table-of-sizes', component: TableOfSizesComponent, pathMatch: 'full' },

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
  { path: 'faq/0223369/-I-made-an-order-What-is-next-', component: OrderFirstComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-find-out-if-the-order-can-already-be-picked-up-', component: OrderSecondComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-cancel-an-order-', component: OrderThirdComponent, pathMatch: 'full' },

  //PRODUCTS
  { path: 'faq/0223369/-How-to-choose-the-right-size-', component: ProductFirstComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-find-out-if-the-product-is-available-', component: ProductSecondComponent, pathMatch: 'full' },

  //DELIVERY
  { path: 'faq/0223369/-How-to-order-goods-', component: DeliveryFirstComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-When-and-where-can-I-pick-up-my-order-', component: DeliverySecondComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-I-want-to-place-an-order-When-will-it-be-delivered-', component: DeliveryThirdComponent, pathMatch: 'full' },

  //PAYMENT
  { path: 'faq/0223369/-How-can-I-get-a-promo-code-', component: PaymentFirstComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-use-a-promo-code-', component: PaymentSecondComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-pay-for-an-order-by-cashless-payment-', component: PaymentThirdComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-pay-for-an-order-by-card-', component: PaymentFourthComponent, pathMatch: 'full' },

  //PRIVATE ROOM
  { path: 'faq/0223369/-How-do-I-can-change-the-email-address-in-my-account-', component: PrivateRoomFirstComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-do-I-can-delete-my-account-', component: PrivateRoomSecondComponent, pathMatch: 'full' },

  //GARANCY
  { path: 'faq/0223369/-What-goods-are-subject-to-exchange-and-return-', component: GarancyFirstComponent, pathMatch: 'full' },
  { path: 'faq/0223369/-How-to-return-the-goods-in-my-city-', component: GarancySecondComponent, pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
