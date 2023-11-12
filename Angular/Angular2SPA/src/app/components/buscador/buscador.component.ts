import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {


    heroes: any[] = [];
    termino:string;

    constructor(private activatedRpute: ActivatedRoute, private heroeService: HeroesService) {



    }

    ngOnInit() {

        this.activatedRpute.params.subscribe(params => {
            console.log(params['termino']);
            this.termino = params['termino'];
            this.heroes = this.heroeService.buscarHeroes(params['termino']);
            console.log(this.heroes);
        });

    }
}