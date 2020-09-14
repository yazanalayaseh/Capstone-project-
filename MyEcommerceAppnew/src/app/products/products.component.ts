import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';

import { ProductsService, ProductItem } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  viewMode = 'LIST';
  selectedProduct: ProductItem;

  // use observable to get data from service
  products$: Observable<ProductItem[]>;

  selectedID$ = new BehaviorSubject<string>(null);

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getItems();

    this.route.params.subscribe(params => {
        this.selectedID$.next(params.id);
    });

    combineLatest([this.products$, this.selectedID$]).subscribe(([items, selectedID]) => {
      this.selectedProduct = items.find(o => o.id === selectedID);
      if (this.selectedProduct) {
        this.viewMode = 'DETAILS';
      }
    });
  }

  onSelect(product: ProductItem): void {
    const path = `products/${product.id}`;
    this.router.navigateByUrl(path);
  }
}
