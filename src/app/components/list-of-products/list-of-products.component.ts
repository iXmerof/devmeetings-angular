import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {

  private _products$ = new BehaviorSubject<Product[]>([]);

  filteredProducts$: Observable<Product[]>;

  @Input()
  set products(value: Array<Product>) {
    this._products$.next(value);
  }

  searchInput = new FormControl();

  searchQuery$: Observable<string> = this.searchInput.valueChanges
  .pipe(
    startWith(''),
    map(value => value.toLowerCase())
  );

  constructor() {
    this.filteredProducts$ = combineLatest(this._products$, this.searchQuery$)
    .pipe(
      // destrukturyzacja tablicy w parametrach
      map(([products, searchQuery]) => products.filter(product => product.find(searchQuery)))
    );
  }

  ngOnInit() {
  }

}
