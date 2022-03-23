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
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenevService } from './services/sidenev.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  title = 'Share_project';
  currentPage = '';
  event$;
  toggleActive: boolean = false;

  constructor(
    private dialog: MatDialog,
    private route: Router,
    private sidenavservice: SidenevService
  ) {
    this.event$ = this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentPage = event.url;
        console.log(this.currentPage)
      }
    });
  }
  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenavservice.toggle();

    console.log('Clicked');
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }
}
