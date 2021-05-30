import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ShopApiService {

  products: Product[] = JSON.parse(<string>localStorage.getItem('productsList')) || [];
  cartList: any = JSON.parse(<string>localStorage.getItem('cartList')) || [];
  totalPrice: number = 0;
  constructor(private http: HttpClient) {

  }

  getData () {
    if (this.products.length > 0) {
      return this.products;
    } else {
      this.http.get('/assets/products.json').subscribe((data:any) => this.products = data);
      this.saveData();
      return this.products;
    }
  }

  saveData () {
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    localStorage.setItem('productsList', JSON.stringify(this.products));
  }

  itemTotalPriceCart () {
    this.totalPrice = 0;
    for(let item of this.cartList) {
      this.totalPrice += item.price;
    }
    return Math.floor(this.totalPrice * 100) / 100;
  }

  removeFromCart(id: number) {
    for(let item of this.products) {
      if(item.id === id) {
        for (let cartItem of this.cartList) {
          if(cartItem.id === item.id) {
            cartItem.price -= item.price;
            cartItem.count -= 1;
            item.available += 1;
            this.saveData();
          }
        }
      }
    }
  }

  addToCart(id: number) {
    let flag = true;
    for(let item of this.products) {
      if(item.id === id) {
        for (let cartItem of this.cartList) {
          if(item.available === 0) {
            flag = false;
            break;
          }
          if(cartItem.id === item.id) {
            cartItem.price += item.price;
            cartItem.count += 1;
            flag = false;
            item.available -= 1;
            this.saveData();
          }
        }
        if(flag) {
          this.cartList.push({
            id: item.id,
            name: item.name,
            price: item.price,
            count: 1
          });
          item.available -= 1;
          this.saveData();
        }
      }
    }
  }

  clearCartList() {
    localStorage.removeItem('cartList');
  }
}
