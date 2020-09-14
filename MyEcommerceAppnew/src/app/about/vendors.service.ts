import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// define vendor model
export interface VendorItem {
    id: string;
    name: string;
    description: string;
    email: string;
    address: string;
    phone: string;
}

const DEFAULT_VENDORS: VendorItem[] = [
    { id: '1', name: 'Sample Vendor 1', description: 'Vendor Description 1', email: 'vendor1@gmail.com',  address: 'wwefew gregregerg wfwef', phone: '345-567-7896' },
    { id: '2', name: 'Sample Vendor 2', description: 'Vendor Description 2', email: 'vendor2@gmail.com',  address: 'wwewfe wfwef', phone: '345-567-5678' },
    { id: '3', name: 'Sample Vendor 3', description: 'Vendor Description 3', email: 'vendor3@gmail.com',  address: 'wwefew fewfewfe gergreg', phone: '345-567-1209' },
    { id: '4', name: 'Sample Vendor 4', description: 'Vendor Description 4', email: 'vendor4@gmail.com',  address: 'wwefegreghtyjjw fewyjytjyjewfe wfwef', phone: '345-567-5698' },
    { id: '5', name: 'Sample Vendor 5', description: 'Vendor Description 5', email: 'vendor5@gmail.com',  address: 'wwefew fewfewfe wfwytjtyjytjyef', phone: '345-567-4590' }
]

@Injectable({
    providedIn: 'root',
})
export class VendorsService {

    getItems(): Observable<VendorItem[]> {
        return of(DEFAULT_VENDORS);
    }
}