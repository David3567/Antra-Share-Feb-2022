import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from './interfaces/user-auth.model';
import { JWTDecoderService } from './services/jwt-decoder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamProject';
  decoded: AppUserAuth;

  constructor(private router: Router, private jwtService: JWTDecoderService) { }

  getUrl() {
    this.decoded = this.jwtService.getCurrentUser();
    return this.router.url;
  }
}
