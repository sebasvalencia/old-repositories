import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  heroes: Heroe[] = [];


  //Se dispara el constructor del servicio de heroes
  //se crea una propiedad privada
  constructor(private _heroesService: HeroesService, private _router:Router) {
    console.log('primero se ejecuta el constructor');
  }


  ngOnInit() {
    console.log('segundo se ejecuta el ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  //redirecciona al componente de heroe induvidual
  verHeroe(id: number) {
    console.log(id);
    this._router.navigate(['/heroe', id]);
  }

}
