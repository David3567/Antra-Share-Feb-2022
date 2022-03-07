import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularhw1';
  currentColor:string = "black";
  colorArr: string[] = ["blue", "red", "purple", "green"]

  changeColor(color:string) {
    this.currentColor = color;
  }
}
