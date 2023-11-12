import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {


  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo:"Hombre",
    acepta:false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  }, {
    codigo: "ESP",
    nombre: "España"
  }
  ];

  sexos:string[] =['Hombre', "Mujer"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("NgForm: ", forma);
    console.log("Valor", forma.value);
  }

}
