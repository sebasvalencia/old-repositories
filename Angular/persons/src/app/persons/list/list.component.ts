import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { ReqRes } from '../../models/reqres.model';

import { Store } from '@ngrx/store';
import { UploadPersons } from '../../store/actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public persons: Person[] = [];

  constructor(private service: PersonService, private store: Store<AppState>) { }

  ngOnInit() {
    // this.service.getPersons().subscribe(
    //   (data: ReqRes) => {
    //     this.persons = data.data;
    //     console.log('v', data)
    //   }
    // );

    this.store.select('persons')
      .subscribe( personsData =>{
        console.log('personsData', personsData);
        this.persons = personsData.persons;
      });

    console.log('listCOmponent');
    this.store.dispatch(new UploadPersons());
  }

}
