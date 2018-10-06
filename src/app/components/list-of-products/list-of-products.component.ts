import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {

  @Input()
  products: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
