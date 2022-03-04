import { Component } from '@angular/core';

@Component({
  selector: 'rating-input',
  template: `
    <span
      *ngFor="let starred of stars; let i = index"
      (click)="rate(i + (starred ? (value > i + 1 ? 1 : 0) : 1))"
    >
      <ng-container *ngIf="starred; else noStar">⭐</ng-container>
      <ng-template #noStar>·</ng-template>
    </span>
  `,
  styles: [
    `
      span {
        display: inline-block;
        width: 25px;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
      }
    `,
  ],
})
export class RatingInputComponent {
  stars: boolean[] = Array(5).fill(false);

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
  }
}
