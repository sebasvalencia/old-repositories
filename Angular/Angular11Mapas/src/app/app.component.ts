import { Component } from '@angular/core';

import { MapasService } from './services/mapas.service';

import { Marcador } from './interfaces/marcador.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // datos por defecto - frisby de la 70
  lat = 6.246062;
  lng = -75.589227;
  marcadorSel: any = null;
  draggable = true;

  constructor(public _ms: MapasService) {
    this._ms.cargarMarcadores();
    console.log(this.marcadorSel);
  }

  clickMapa(evento) {
    const nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._ms.insertarMarcador(nuevoMarcador);

    console.log(evento);
  }

  clickMarcador(marcador: Marcador, i: number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;
  }

  dragEnd(marcador: Marcador, evento) {
    console.log(marcador, evento);
    const lat = evento.coords.lat;
    const lng = evento.coords.lng;
    marcador.lat = lat;
    marcador.lng = lng;
    this._ms.guardarMarcadores();
  }




}
