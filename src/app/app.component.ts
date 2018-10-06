import { Component } from '@angular/core';
import { Product } from './components/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    new Product('Jablko', 'dobre do spozycia', true),
    new Product('Cytryna', 'lzy z Ciebie wycisnie'),
    new Product('Mandarynka', 'slodziutka, ale tylko gdy sie do niej dobierzesz'),
    new Product('Losos', 'owoc, jednak morza nie z krzaczka', true),
    new Product('Pomidor', 'uwazaj na kolce... haha nie.'),
    new Product('Sosna', 'ladnie pachnie, ale do niczego sie nie nada', true)
  ];

}
