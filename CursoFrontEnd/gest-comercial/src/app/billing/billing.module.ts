import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FromSuppliersComponent } from './from-suppliers/from-suppliers.component';
import { ToCustomersComponent } from './to-customers/to-customers.component';


@NgModule({
  declarations: [
    FromSuppliersComponent,
    ToCustomersComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports: [
    FromSuppliersComponent,
    ToCustomersComponent
  ]
})
export class BillingModule { }
