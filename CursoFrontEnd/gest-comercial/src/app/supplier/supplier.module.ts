import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SupplierRequestComponent } from './supplier-request/supplier-request.component';


@NgModule({
  declarations: [
    SuppliersListComponent,
    SupplierRequestComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ],
  exports: [
    SuppliersListComponent,
    SupplierRequestComponent
  ]
})
export class SupplierModule { }
