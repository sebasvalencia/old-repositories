
import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[Usuarios] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuarios] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Usuarios] Cargar usuario SUCCESS';

export class CargarUsuario implements Action {
  readonly type = CARGAR_USUARIO;
  constructor(public id: string) { }

}

export class CargarUsuarioFail implements Action {
  readonly type = CARGAR_USUARIO_FAIL;
  constructor(public payloadError: any) { }
}

export class CargarUsuarioSuccess implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;
  constructor(public payloadUsuario: Usuario) { }
}

export type usuarioActions = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;
