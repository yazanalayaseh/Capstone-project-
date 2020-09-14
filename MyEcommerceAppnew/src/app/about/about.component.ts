import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 

import { VendorsService, VendorItem } from './vendors.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  vendors$: Observable<VendorItem[]>;

  constructor(private vendorsService: VendorsService) {
  }

  ngOnInit(): void {
    this.vendors$ = this.vendorsService.getItems();
  }

}
