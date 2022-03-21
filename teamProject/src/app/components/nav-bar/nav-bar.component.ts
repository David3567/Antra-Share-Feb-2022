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

  constructor(@Inject(MENU_TOKEN) public menus:Menu[]) { }

  ngOnInit(): void {
    
  }

  logout(): void {
  }
}
