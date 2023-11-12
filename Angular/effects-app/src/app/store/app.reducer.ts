// appReducer nuestro reducer que tiene toda la combinacion de reducer que usamos en la app
// aqui importamos al modulo de store, creamos la definicion global

import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  usuarios: reducers.UsuariosState;
  usuario: reducers.UsuarioState;
}

// action reducer map es la combinacion de todos los reducers que usa la interface del appState
export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer,
};
