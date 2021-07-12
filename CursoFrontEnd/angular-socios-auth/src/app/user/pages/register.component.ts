import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  template: `<app-registr-form  [formGroup]="formGroup"
                                [error]="error"
                                (eventRegister)="register($event)"></app-registr-form>`,

})
export class RegisterComponent implements OnInit {

  formGroup!:FormGroup;
  user!:User;
  error!:string;

  constructor(private fb:FormBuilder, private authService:AuthService,private router: Router) {
    this.user = new User();

  }

  ngOnInit(): void {

    this.formGroup = this.fb.group(this.user);
    Object.keys(this.formGroup.controls).map(ctrl =>{
      const validators =[Validators.required];
      if(ctrl==='email') validators.push(Validators.email);
      if(ctrl==='confirmPassword')validators.push(this.passwordValidator().bind(this))

      this.formGroup.controls[ctrl].setValidators(validators)
    });

  }

  register(user:User){
    this.authService.registerUser$(user).subscribe(data =>{
      this.authService.setToken(data.accessToken);
      this.router.navigate(['/socio'])
    });
  }
  passwordValidator(): ValidatorFn {

    return (ctrl: AbstractControl): ValidationErrors | null =>
       this.formGroup?.get('password')?.value !== ctrl?.value?{mismatch: true}:null;
}
}
