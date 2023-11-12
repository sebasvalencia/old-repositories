import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DogComponent],
  exports: [DogComponent]
})
export class DogModule { }
