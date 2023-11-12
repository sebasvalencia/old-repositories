import { Person } from './person.model';

export class ReqRes {
  constructor(
    public page: number,
    // tslint:disable-next-line: variable-name
    public per_page: number,
    public total: number,
    // tslint:disable-next-line: variable-name
    public total_pages: number,
    public data: Person[]
  ) {}
}
