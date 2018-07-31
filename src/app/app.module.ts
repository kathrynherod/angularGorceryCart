import { environment } from '../environments/environment';

//Modules//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Components//
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

//Services//
import { AuthService } from 'src/app/__services/auth.service';
import { AuthGuardService } from './__services/auth-guard.service';
import { UserService } from './__services/user.service';
=======
<<<<<<< HEAD
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
>>>>>>> adding route protecting for admin links (+8 squashed commits)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
=======
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase)
=======
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

//Services//
import { AuthService } from 'src/app/__services/auth.service';
import { AuthGuardService } from './__services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
>>>>>>> adding route protecting for admin links (+8 squashed commits)
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'my/orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'admin/products',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService]
      }
    ]),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
<<<<<<< HEAD
    MatToolbarModule,
=======
<<<<<<< HEAD
    MatToolbarModule
>>>>>>> 289a2c5... routes added
=======
    MatToolbarModule,
<<<<<<< HEAD
    MatInputModule
>>>>>>> a6fbfe9... firebase added
=======
>>>>>>> adding route protecting for admin links (+8 squashed commits)
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularGrocery'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
<<<<<<< HEAD
  ],
  providers: [AuthService, AuthGuardService, UserService],
=======
>>>>>>> 4f19e07... google login enabled
  ],
  providers: [AuthService, AuthGuardService, AdminOrdersComponent],
>>>>>>> adding route protecting for admin links (+8 squashed commits)
  bootstrap: [AppComponent]
})
export class AppModule {}
