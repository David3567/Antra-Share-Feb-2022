import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

@Injectable({
  providedIn: 'root'
})
export class SidenevService {
  private sidenav!: MatSidenav;

  constructor() { }

  setSideNav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    console.log(sidenav)
  }

  open() {
    return this.sidenav.open();
  }

  close() {
    return this.sidenav.close();
  }

  toggle(): void {
    this.sidenav.toggle();
  }
}
