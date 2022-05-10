import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() default: number = 1;
  rates: { rate: number, chosen: boolean }[] = [
    {
      rate: 1,
      chosen: false,
    },
    {
      rate: 2,
      chosen: false,
    },
    {
      rate: 3,
      chosen: false,
    },
    {
      rate: 4,
      chosen: false,
    },
    {
      rate: 5,
      chosen: false,
    }
  ]
  @Output() chosenRating = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.choose(this.default - 1);
    console.log("Default: ", this.default)
  }

  choose(index: number): void {
    if (index === 4) {
      if (this.rates[index].chosen) {
        this.rates.forEach((rate) => rate.chosen = false);
        this.chosenRating.emit(0);
        return;
      }
    }

    if (this.rates[index].chosen) {
      if (!this.rates[index + 1].chosen) {
        this.rates.forEach((rate) => rate.chosen = false);
        this.chosenRating.emit(0);
        return;
      }
    }

    this.rates.forEach((rate) => rate.chosen = false);
    for (let i = 0; i <= index; i++) {
      this.rates[i].chosen = !this.rates[index].chosen;
    }

    this.chosenRating.emit(this.rates[index].rate);
  }

}
