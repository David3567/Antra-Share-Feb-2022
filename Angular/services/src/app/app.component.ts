import { Component, Inject } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { RandomService } from './somedecorators/random-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services';

  constructor(private random: RandomService) {}

  ngOnInit(): void {
    console.log('app.component: ', this.random.RandomNo);
  }
}
