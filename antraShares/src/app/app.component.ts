import {
  DoCheck,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { VariableValue } from './services/variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'antraShares';
  login!: boolean;
  constructor(private variable: VariableValue) {}
  ngDoCheck(): void {
    this.login = this.variable.login;
  }
}
