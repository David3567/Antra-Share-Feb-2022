import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/core/services/interface/register.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  user!:Users;

  constructor(private authService:AuthService, private route:  ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.username = params["username"];
    });
  }

  ngOnInit(): void {
    this.authService
      .getProfile(this.username)
      .subscribe((storyData: any) => {
        this.user = storyData.body;
        // console.log("user", this.user);
      });
  }
}