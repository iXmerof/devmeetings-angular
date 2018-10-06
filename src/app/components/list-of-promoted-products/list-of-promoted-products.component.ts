import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-list-of-promoted-products',
  templateUrl: './list-of-promoted-products.component.html',
  styleUrls: ['./list-of-promoted-products.component.css']
})
export class ListOfPromotedProductsComponent implements OnInit {

  @Input()
  products: Array<Product>;

  constructor() { }

  ngOnInit() { }

}
