import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// define product model
export interface ProductItem {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

const DEFAULT_PRODUCTS: ProductItem[] = [
    { id: '1', name: 'Sample Product 1', description: 'Sample Description 1', image: null, price: 10 },
    { id: '2', name: 'Sample Product 2', description: 'Sample Description 2', image: null, price: 20 },
    { id: '3', name: 'Sample Product 3', description: 'Sample Description 3', image: null, price: 30 },
    { id: '4', name: 'Sample Product 4', description: 'Sample Description 4', image: null, price: 40 },
    { id: '5', name: 'Sample Product 5', description: 'Sample Description 5', image: null, price: 50 }
];

@Injectable({
    providedIn: 'root',
})
export class ProductsService {

    getItems(): Observable<ProductItem[]> {
        // create an observable from array of items
        return of(DEFAULT_PRODUCTS);
    }
}