import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MENU_TOKEN } from 'src/app/config/menu';
import { Menu } from 'src/app/interfaces/menu.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router, @Inject(MENU_TOKEN) public menus:Menu[],) { }

  ngOnInit(): void {
  }

  openNewsfeed():void {
    console.log('1111')
  }
}
