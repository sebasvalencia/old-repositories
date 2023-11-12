import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as usuariosActions from '../actions';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(private actions$: Actions, private usuariosService: UsuarioService) { }

  // las action van a estar escuchando cualquier action que sea disparada al store

  @Effect()
  cargarUsuarios$: Observable<Action> = this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIOS),
    switchMap(() => {
      return this.usuariosService.getUsers()
          .pipe(
            map(users => new usuariosActions.CargarUsuariosSuccess(users)),
            catchError( error => of(new usuariosActions.CargarUsuariosFail(error)) )
          );
    })
    // map( action =>  {
    //   console.log(action);
    //   return action;
    // })
  );


}
