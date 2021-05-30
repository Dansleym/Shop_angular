import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ShopApiService } from './shared/shop-api.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ThankComponent } from './components/thank/thank.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    OrderComponent,
    ThankComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    ShopComponent,
    CartComponent,
    OrderComponent,
    ThankComponent
  ],
  providers: [
    ShopApiService
  ]
})
export class ShopModule { }
