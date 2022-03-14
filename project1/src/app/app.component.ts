import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';

  showNav = true;

  constructor(private router: Router) {
    // if (window.location.pathname === '/login') {
    //   this.showNav = false;
    //}
  }

  ngOnInit() {
  }
}