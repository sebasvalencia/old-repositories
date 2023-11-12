import { Usuario } from 'src/app/models/usuario.model';

import * as fromUsuario from '../actions';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usuarioReducer(state = estadoInicial, action: fromUsuario.usuarioActions): UsuarioState {

  switch (action.type) {
    case fromUsuario.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true, // ya tiene info no lo vuelvas a cargar
        user: action.payloadUsuario
      };

    case fromUsuario.CARGAR_USUARIO_FAIL:
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


