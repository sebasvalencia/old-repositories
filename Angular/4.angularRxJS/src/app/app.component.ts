import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRxJS';
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  urlAssets = '/src/assets/todo.json';
  todo: string;

  constructor(private http: HttpClient) {
    // const observable = this.http.get(this.urlAssets);
    const observable = this.http.get(this.url);
    observable.subscribe(
      (todo: Todo) => this.todo = todo.title
      );
  }


}
