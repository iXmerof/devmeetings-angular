import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPromotedProductsComponent } from './list-of-promoted-products.component';

describe('ListOfPromotedProductsComponent', () => {
  let component: ListOfPromotedProductsComponent;
  let fixture: ComponentFixture<ListOfPromotedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPromotedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPromotedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
