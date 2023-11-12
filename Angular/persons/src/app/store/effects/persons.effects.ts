
import { Actions, ofType, Effect } from '@ngrx/effects';
import { PersonService } from '../../services/person.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { UPLOAD_PERSONS, UploadPersonsSuccess } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class PersonsEffects {
  constructor(private actions$: Actions, private personsService: PersonService) { }

  @Effect()
  uploadPersons$: Observable<Action> = this.actions$.pipe(
    ofType(UPLOAD_PERSONS),
    switchMap(() => {
      return this.personsService.getPersons()
      .pipe(
        map(persons => new UploadPersonsSuccess(persons) ),
        catchError( error => of((error)) )
      );
    })
  );
}
