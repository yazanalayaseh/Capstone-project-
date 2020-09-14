import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent } from './about/about.component';
import {ContactComponent } from './contact/contact.component';
import {HomeComponent } from './home/home.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {ProductsComponent} from './products/products.component';

import { DEFAULT_PATH } from './app.component';

const routes: Routes = [
  { // have to define default route
    path: '',
    pathMatch: 'full', //default
    redirectTo: DEFAULT_PATH
  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
