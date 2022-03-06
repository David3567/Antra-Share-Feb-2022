import { Component, Input } from '@angular/core';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ColorChangingTitle';
  color = "black";

  addItem(newItem: string) {
    this.color = newItem;
  }

}
