import { Component, OnInit } from '@angular/core';
import {ShopApiService} from '../../shared/shop-api.service';
import {Product} from '../../shared/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private shopApi: ShopApiService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.shopApi.getData();
  }

  addToCart(id: number) {
    this.shopApi.addToCart(id);
    this.router.navigate(['/cart']);
  }
}
