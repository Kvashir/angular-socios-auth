import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registr-form',
  templateUrl: './registr-form.component.html',
  styleUrls: ['./registr-form.component.scss']
})
export class RegistrFormComponent implements OnInit {
  @Input() formGroup!:FormGroup;
  @Input() error!:string;
  @Output() eventRegister= new EventEmitter();

  hide:boolean=true;
  hide2:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.eventRegister.emit(this.formGroup.value);
    this.formGroup.reset(); 
  }

}
