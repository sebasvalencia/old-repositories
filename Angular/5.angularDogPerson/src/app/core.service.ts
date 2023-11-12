import { Person } from './person.interface';
import { Dog } from './dog.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  urlDog = 'https://dog.ceo/api/breeds/image/random';
  urlPerson = 'https://uinames.com/api/?ext';

  constructor(private http: HttpClient) {}

  dogService(): Observable<Dog> {
    return this.http.get<Dog>(this.urlDog);
  }

  personService(): Observable<Person> {
    return this.http.get<Person>(this.urlPerson);
  }

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

}
