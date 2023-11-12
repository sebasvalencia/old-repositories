import { Action } from '@ngrx/store';
import { Person } from 'src/app/models/person.model';

export const UPLOAD_PERSONS = '[Persons] Upload persons';
export const UPLOAD_PERSONS_SUCCESS = '[Persons] Upload persons success';

export class UploadPersons implements Action {
  readonly type = UPLOAD_PERSONS;
}

export class UploadPersonsSuccess implements Action {
  readonly type = UPLOAD_PERSONS_SUCCESS;
  constructor(public payloadPersons: Person[]) {}
}

export type personsActions = UploadPersons | UploadPersonsSuccess;
