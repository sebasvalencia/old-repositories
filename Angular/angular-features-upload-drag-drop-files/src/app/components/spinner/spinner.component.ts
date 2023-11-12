import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input() value = 0;

  public circumference = 2 * Math.PI * 47;
  public strokeDashoffset = 0;
  public color = '#0000ff';
  constructor(public dialogRef: MatDialogRef<SpinnerComponent>
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.onPercentageChanged(changes['value'].currentValue);
    }
  }

  onPercentageChanged(val: number) {
    const offset = this.circumference - val / 100 * this.circumference;
    this.strokeDashoffset = offset;
  }

}
