import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio',
  template: `<app-header></app-header><app-socio-form></app-socio-form>`
})
export class SocioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
