import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { ProductosRoutingModule } from './productos-routing.module';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
