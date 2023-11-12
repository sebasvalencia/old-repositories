import { Usuario } from 'src/app/models/usuario.model';

import * as fromUsuarios from '../actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosActions): UsuariosState {

  switch (action.type) {
    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true, // ya tiene info no lo vuelvas a cargar
        users: [...action.payloadUsuarios]
      };

    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        // error: action.payloadError // por ahora mandamos todo el error
        error: {
          status: action.payloadError.status,
          message: action.payloadError.message,
          url: action.payloadError.url
        }
      };

    default:
      return state;
  }

}


