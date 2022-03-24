import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrls: ['./setting-panel.component.css']
})
export class SettingPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLogin() {
    this.router.navigate(['login']);
  }

}
