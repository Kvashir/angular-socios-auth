import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  template: `<app-registr-form [formGroup]="formGroup"
                                (eventRegister)="register($event)"></app-registr-form>`,

})
export class RegisterComponent implements OnInit {

  formGroup!:FormGroup;
  user!:User;

  constructor(private fb:FormBuilder, private authService:AuthService,private router: Router) {
    this.user = new User();

  }

  ngOnInit(): void {
    
    this.formGroup = this.fb.group(this.user);
    Object.keys(this.formGroup.controls).map(ctrl =>{
      this.formGroup.controls[ctrl].setValidators(Validators.required)
    });

  }

  register(user:User){
    this.authService.registerUser$(user).subscribe(data =>{
      this.authService.setToken(data);
      this.router.navigate(['/socio'])
    });
  }
}
