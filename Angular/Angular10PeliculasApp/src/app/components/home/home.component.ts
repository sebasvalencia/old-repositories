import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesNinos:any;

  constructor(public _ps:PeliculasService ) {
    this._ps.getCartelera().subscribe( data => {
      //console.log(data)
      this.cartelera = data;
    });

    this._ps.getPopulares()
      .subscribe( data => {
      //  console.log('populares', data);
        this.populares = data;
      });

      this._ps.getPopularesNinos()
        .subscribe( data =>{
          console.log('niños ',data);
          this.popularesNinos = data;
        });


   }

  ngOnInit() {
  }

}
