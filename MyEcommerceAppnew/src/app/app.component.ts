import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export const DEFAULT_PATH = 'home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyEcommerceApp';
  path = DEFAULT_PATH;

  constructor(
    private router: Router,
    private location: Location) {

  }

  ngOnInit(): void {
    const path = this.location.path();
    if (path !== '') {
      this.path = path.slice(1);
    }
  }

  go(path: string): void {
    this.path = path;
    this.router.navigateByUrl(path);
  }
}
