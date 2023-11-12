import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  name = '@svalencian';
  count = 0;
  imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';
  disabled = false;

  imgDog = '/assets/dog.jpg';
  imgCat = '/assets/cat.jpg';
  imgSource2 = '';
  imgSource3 = '';


  constructor() { }

  ngOnInit() {
  }

  showAnimal(value: string) {
    console.log('value: ', value);
    switch (value) {
      case 'dog':
        this.imgSource2 = this.imgDog;
        break;
      case 'cat':
        this.imgSource2 = this.imgCat;
        break;

      default:
        break;
    }
  }


  showAnimal2(event) {
    console.log('event: ', event.target.value);
    this.imgSource3 = this.imgCat;
  }

}
