import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router, RouterLink } from '@angular/router';
import { MENU_TOKEN } from 'src/app/config/menu';
import { Menu } from 'src/app/interfaces/menu.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  isCollapsed = false;

  constructor(@Inject(MENU_TOKEN) public menus: Menu[], private router: Router) { }

  ngOnInit(): void {

  }

  logOut(): void {
    localStorage.removeItem('token');
    setTimeout(() => {
      this.router.navigateByUrl("http://localhost:4200/login")
    }, 2000)
  }
}
