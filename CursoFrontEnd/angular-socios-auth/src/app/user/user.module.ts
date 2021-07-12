import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrFormComponent } from './components/registr-form/registr-form.component';
import { RegisterComponent } from './pages/register.component';
import { LoginComponent } from './pages/login.component';
import { ComponentsModule } from '../shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrFormComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [

  ]
})
export class UserModule { }
