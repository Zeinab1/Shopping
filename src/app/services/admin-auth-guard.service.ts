import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { CanActivate } from '@angular/router';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth:AuthService,private userService:UsersService) { }
  canActivate(): Observable<boolean> {
 return this.auth.APPUser$
    .map(appUser=> appUser.isAdmin);
  }
}
