import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamProject';
  token = localStorage.getItem('bearerToken');
  decoded = this.token ? jwtDecode(this.token) : {username: "Guest", userRole: 'guest'};
  
  constructor(private router: Router){}

  getUrl() {
    console.log(this.router.url)
    return this.router.url;
  }
  
  
}
function jwt_decode(arg0: string) {
  throw new Error('Function not implemented.');
}

