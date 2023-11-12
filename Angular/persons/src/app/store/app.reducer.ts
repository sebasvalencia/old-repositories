import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  persons: reducers.PersonsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  persons: reducers.personsReducer,
};
