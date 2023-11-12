import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { CargarUsuario } from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
      .subscribe( params => {
        const id = params['id'];
        this.store.dispatch( new CargarUsuario(id) );

      });

    this.store.select('usuario').subscribe( (usuario) => {
      console.log(usuario);
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error;
    });
  }

}
