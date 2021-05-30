import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ShopApiService} from '../../shared/shop-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  myForm: FormGroup;

  constructor(private router: Router, private shopApi: ShopApiService) {
    this.myForm = new FormGroup({
      "fname": new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z]{1,15}')
      ]),
      "lname": new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z]{1,15}')
      ]),
      "email": new FormControl("", [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      "password": new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*.{6,}$')
      ])
    });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log("Клиент: ", this.myForm.value);
    console.log("Заказ: ", this.shopApi.cartList);
    console.log("Сумма: ", this.shopApi.totalPrice);

    this.shopApi.clearCartList();

    this.router.navigate(['/thank']);
  }
}
