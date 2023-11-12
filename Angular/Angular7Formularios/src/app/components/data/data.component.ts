import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: "Sebastian",
      apellido: 'Valencia'
    },
    correo: "sebastian@gmail.com"
    //,
    //pasatiempos:['Correr','Dormir','Comer']
  }


  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        //'nombre':new FormControl('Sebas'),
        //this.usuario.nombrecompleto.nombre -> precargar informacion
        'nombre': new FormControl(this.usuario.nombrecompleto.nombre, [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl(this.usuario.nombrecompleto.apellido, [Validators.required, this.noHerrera])
      }),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'correo': new FormControl(this.usuario.correo, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")

      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario ),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma) //la funcion esta en otro contexto
    ]);


    //crear observador para revisar los cambios en la data
    /*this.forma.valueChanges.subscribe( data=>{
      console.log(data);
    } );*/

    //solo esta pendiente del username
    this.forma.controls['username'].valueChanges.subscribe( data =>{
      console.log(data);
    });

    //subscribirnos al status del control
    this.forma.controls['username'].statusChanges.subscribe( data =>{
      console.log(data);
    });


  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  //validacion - q cualquier persona tenga el apellido herrera
  noHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === "herrera") {
      return {
        noherrera: true
      }
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    console.log(this);
    let forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Observable<any>{
      let promesa = new Promise( (resolve, reject) =>{
        setTimeout(() => {
          if(control.value == "strider"){
            resolve({existe:true})
          }else{
            resolve(null)
          }
        }, 3000);
      });
      return promesa;
  }



  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    //this.forma.reset( this.usuario );

    /*this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });*/

    //Otra forma, no es la mejor
    //this.forma.controls['correo'].setValue('nuevocorreo@setvalue.com');



  }

  ngOnInit() {
  }

}