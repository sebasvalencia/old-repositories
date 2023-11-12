import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(public http: HttpClient) {
    console.log('service is already!!');
  }

  getRandomDog() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

}
