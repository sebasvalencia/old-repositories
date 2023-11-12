import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  companyName = `Dog's Company`;
  @Output() passUrlDog: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dogService: DogService) { }

  ngOnInit() { }

  getRandomDog() {
    return this.dogService.getRandomDog().subscribe(
      (dog: any) => {
        this.passUrlDog.emit(dog.message);
      }
    );
  }

}
