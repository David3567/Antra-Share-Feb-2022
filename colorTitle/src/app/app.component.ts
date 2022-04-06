import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorTitle';
  header = 'black';

  color(colorid: string) {
    console.log(colorid);
    this.header = colorid;
  }

}
