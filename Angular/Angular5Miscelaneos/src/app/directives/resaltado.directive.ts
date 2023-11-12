import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) { 
    console.log("Directiva llamada");
    el.nativeElement.style.backgroundColor = "yellow";
  }

  //variable para capturar el orange
  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    //this.el.nativeElement.style.backgroundColor = "red";

    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    //this.el.nativeElement.style.backgroundColor = null;
    //this.el.nativeElement.style.backgroundColor = "blue";
    this.resaltar(null);
  }

  //creamos propiedad privada
  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }





}
