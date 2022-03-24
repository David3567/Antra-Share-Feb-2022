import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Share_project';
  event$;
  currentPage!:string;
  disableToolBarPages: String[] = ['/register', '/login', '/'];

  constructor(private route: Router) {
    this.event$ = this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentPage = event.url;
        console.log(this.currentPage)
      }
    });
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }
}
