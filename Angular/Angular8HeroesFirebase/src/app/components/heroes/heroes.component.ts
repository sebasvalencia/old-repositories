import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor(private _heroesService: HeroesService) {

    this._heroesService.getHeroes().subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.heroes = data;
        this.loading = false;
      }, 3000);
    })
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe(respuesta => {
      //validar q si se quiee borrar
      console.log(respuesta);
      if (respuesta) {
        console.error(respuesta);
      } else {
        console.log("elimino bn");
        delete this.heroes[key$];
      }
    })
  }

}
