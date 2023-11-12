import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [style.fontSize]=" '10px' ">
      Hola mundo... esta es un parrafo con [style.fontSize]=" '10px' "
    </p>

    <p [style.fontSize.px]=" '40' ">
      Hola mundo... este es un parrafo con [style.fontSize.px]=" '40'"
    </p>

    <p [style.fontSize.px]=" tamano ">
      Hola mundo... este es un parrafo con [style.fontSize.px]="tamano"
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>


  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
