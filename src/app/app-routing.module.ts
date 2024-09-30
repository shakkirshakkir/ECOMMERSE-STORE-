import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

const routes: Routes = [
  {path:'pro',component:ProductsComponent},
  {path:'addpro',component:AddproductsComponent},
  {path:'det/:id',component:DetailsComponent},
  {path:"",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
