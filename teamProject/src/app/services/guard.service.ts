import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { JwtService } from "src/app/services/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private jwtService: JwtService) {}

  canActivate(): boolean {
    return this.jwtService.isAdmin();
  }
}