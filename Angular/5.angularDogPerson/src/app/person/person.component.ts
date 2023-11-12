import { Person } from './../person.interface';
import { CoreService } from './../core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name: string;
  surname: string;
  photo: string;

  constructor(private service: CoreService) {
      this.service.personService().subscribe((person: Person) => {
      this.name = person.name;
      this.surname = person.surname;
      this.photo = person.photo;
    });

  }

  ngOnInit() {}

}
