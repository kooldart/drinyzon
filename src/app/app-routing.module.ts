import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component'; 
import { ErrorsComponent } from './errors/errors.component';

const routes: Routes = [
	{ path : '', component : ShopComponent },
	{ path : "**", component : ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
