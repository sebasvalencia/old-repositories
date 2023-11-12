import { Component, OnInit, Input } from '@angular/core';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() urlImgDog: string;

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDog();
  }

  getDog() {
    return this.dogService.getRandomDog().subscribe(
      (dog: any) => {
        this.urlImgDog = dog.message;
      }
    );
  }


}
