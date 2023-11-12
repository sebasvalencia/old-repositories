import { Person } from '../../models/person.model';
import { personsActions, UPLOAD_PERSONS, UPLOAD_PERSONS_SUCCESS } from '../actions';


export interface PersonsState {
  persons: Person[];
}

const initialState: PersonsState = {
  persons: []
};

export function personsReducer(state = initialState, action: personsActions): PersonsState {
  switch (action.type) {
    case UPLOAD_PERSONS:
      console.log('state', state);
      return {
        ...state
      };

    case UPLOAD_PERSONS_SUCCESS:

      console.log('stateSuccess', state, 'payload', action.payloadPersons);
      return {
        ...state,
        persons: [...action.payloadPersons]
      };

    default:
      return state;
  }
}
