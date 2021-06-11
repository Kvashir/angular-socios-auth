import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoringRoutingModule } from './storing-routing.module';
import { StoringListComponent } from './storing-list/storing-list.component';
import { StoringIncomingComponent } from './storing-incoming/storing-incoming.component';
import { StoringOutgoingComponent } from './storing-outgoing/storing-outgoing.component';


@NgModule({
  declarations: [
    StoringListComponent,
    StoringIncomingComponent,
    StoringOutgoingComponent
  ],
  imports: [
    CommonModule,
    StoringRoutingModule
  ],
  exports: [
    StoringListComponent,
    StoringIncomingComponent,
    StoringOutgoingComponent
  ]
})
export class StoringModule { }
