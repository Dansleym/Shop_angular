import { Component, OnInit } from '@angular/core';
import {ShopApiService} from '../../modules/shop/shared/shop-api.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  constructor(private shopApi: ShopApiService) { }

  ngOnInit(): void {
    this.shopApi.getData();
  }
}
