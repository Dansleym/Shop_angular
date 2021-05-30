import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/product';
import {ShopApiService} from '../../shared/shop-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  cartList: any = [];
  totalPrice: number = 0;

  constructor(private shopApi: ShopApiService) {
    this.totalPrice = this.shopApi.itemTotalPriceCart();
  }

  ngOnInit(): void {
    this.products = this.shopApi.getData();
    this.cartList = this.shopApi.cartList;
  }

  addToCart(id: number) {
    this.shopApi.addToCart(id);
    this.totalPrice = this.shopApi.itemTotalPriceCart();
  }

  removeFromCart(id: number) {
    this.shopApi.removeFromCart(id);
    this.totalPrice = this.shopApi.itemTotalPriceCart();
  }
}
