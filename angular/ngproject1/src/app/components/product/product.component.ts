/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId = '';
  discount = '';
  isAllowed = true;

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const val = params;
      this.productId = val['productId'];
      this.discount = val['discount'];
    });
  }

  check() {
    alert('Would you like to navigate away?')
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {

  }

}
