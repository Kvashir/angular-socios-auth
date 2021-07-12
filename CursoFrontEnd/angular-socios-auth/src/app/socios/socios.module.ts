import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './pages/socio.component';
import { SocioFormComponent } from './components/socio-form/socio-form.component';
import { SociosRoutingModule } from './socio-routing.module';
import { ComponentsModule } from '../shared/components/components.module';



@NgModule({
  declarations: [
    SocioComponent,
    SocioFormComponent
  ],
  imports: [
    CommonModule,
    SociosRoutingModule,
    ComponentsModule
  ]
})
export class SociosModule { }
