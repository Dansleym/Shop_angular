import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {ShopPageComponent} from './components/shop-page/shop-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopModule} from './modules/shop/shop.module';
import {ShopComponent} from './modules/shop/components/shop/shop.component';
import {CartComponent} from './modules/shop/components/cart/cart.component';
import {OrderComponent} from './modules/shop/components/order/order.component';
import {ThankComponent} from './modules/shop/components/thank/thank.component';

const routes: Routes = [
  {path: '', component: ShopPageComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'thank', component: ThankComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ShopModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
