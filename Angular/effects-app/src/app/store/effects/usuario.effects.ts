import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as usuarioActions from '../actions';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {

  constructor(private actions$: Actions, private usuarioService: UsuarioService) { }

  // las action van a estar escuchando cualquier action que sea disparada al store

  @Effect()
  cargarUsuario$: Observable<Action> = this.actions$.pipe(
    ofType(usuarioActions.CARGAR_USUARIO),
    switchMap((action: usuarioActions.CargarUsuario) => {
      console.log(action);
      return this.usuarioService.getUSerById(action.id)
        .pipe(
          map(user => new usuarioActions.CargarUsuarioSuccess(user)),
          catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
        );
    })
  );


}
