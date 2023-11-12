import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre: string = 'Sebastian';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: '19'
    }
  }

  valorDePromesa = new Promise( (resolve, reject) =>{

    setTimeout(() => {
      resolve("Llego la data")
    }, 3000);

  });

  fecha = new Date();

  nombre2 = "sebastIan valeNCia";




}
