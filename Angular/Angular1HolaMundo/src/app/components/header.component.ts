import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
  })
  export class HeaderComponent {
    nombre:string = "Sebas";
    apellido:string = "Valencia";
  }
  