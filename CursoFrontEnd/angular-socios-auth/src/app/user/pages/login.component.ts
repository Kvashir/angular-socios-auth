import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-login',
  template: `<app-login-form [formGroup]="formGroup"
                              (submitEvent)="loginUser($event)">
              </app-login-form>`
})
export class LoginComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;

  constructor(private fb:FormBuilder) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.user);
    // console.log(this.user)
    Object.keys(this.formGroup.controls).map(ctrl =>{
      this.formGroup.controls[ctrl].setValidators(Validators.required)
      //  console.log(this.formGroup);
    })
  }

  loginUser(user:User){
    console.log(user);
  }

}
