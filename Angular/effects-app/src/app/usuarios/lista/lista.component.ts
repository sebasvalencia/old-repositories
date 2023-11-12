import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as usuariosActions from '../../store/actions';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(
    // private service: UsuarioService
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    // seleccionar la info del store
    this.store.select('usuarios')
      .subscribe(usuarios => {
        console.log('usuarios', usuarios);
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
       });

    this.store.dispatch(new usuariosActions.CargarUsuarios());
    // this.service.getUsers().subscribe( users => {
    //   console.log(users);
    //   this.usuarios = users;
    // });
  }

}
