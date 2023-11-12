import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=1`)
      .pipe(
        map(respuesta => respuesta['data']) // mapeamos a los usuario , por el momento no necesitamos la paginacion
      );
  }

  getUSerById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map(respuesta => respuesta['data']) // mapeamos a los usuario , por el momento no necesitamos la paginacion
      );
  }
}
