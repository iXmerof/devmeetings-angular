import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<Product> = [];

  promotedProducts: Array<Product>;

  constructor() {
    const prod1 = new Product('Jablko', 'dobre do spozycia', true);
    prod1.assignTags(['owoc', 'czerwony', 'smaczny']);
    this.products.push(prod1);

    const prod2 = new Product('Cytryna', 'lzy z Ciebie wycisnie');
    prod2.assignTags(['warzywo', 'zolty', 'kwasny']);
    this.products.push(prod2);

    const prod3 = new Product('Mandarynka', 'slodziutka, ale tylko gdy sie do niej dobierzesz');
    prod3.assignTags(['owoc', 'pomaranczowy', 'smaczny']);
    this.products.push(prod3);

    const prod4 = new Product('Losos', 'owoc, jednak morza nie z krzaczka', true);
    prod4.assignTags(['ryba', 'rozowy', 'smaczny']);
    this.products.push(prod4);

    const prod5 = new Product('Pomidor', 'uwazaj na kolce... haha nie.');
    prod5.assignTags(['warzywo', 'czerwony', 'smaczny']);
    this.products.push(prod5);

    const prod6 = new Product('Sosna', 'ladnie pachnie, ale do niczego sie nie nada', true);
    prod6.assignTags(['drzewo', 'zielony', 'niejadalny']);
    this.products.push(prod6);

    this.promotedProducts = this.products.filter(product => product.isPromoted);
  }
}
