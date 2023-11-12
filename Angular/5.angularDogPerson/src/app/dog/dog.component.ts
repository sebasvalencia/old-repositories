import { Observable } from 'rxjs';
import { Dog } from './../dog.interface';
import { CoreService } from './../core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog$: Observable<Dog>;
  urlDog = 'https://dog.ceo/api/breeds/image/random';


  constructor(private service: CoreService) {

    this.dog$ = this.service.getData<Dog>(this.urlDog);

   }

  ngOnInit() {
  }

}
