import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [  {path :'card' , component: CardComponent},
{path :"products" , component: ProductsComponent},
{path:"details/:id" , component : ProductdetailsComponent},
{path:"form" , component : FormComponent},
{path:"" , redirectTo:"products", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
