
import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;

}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor(public payloadError: any) { }
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;
  constructor(public payloadUsuarios: Usuario[]) { }
}

export type usuariosActions = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
