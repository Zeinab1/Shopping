import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppUser } from '../models/app-user';
import { UsersService } from './users.service';
import 'rxjs/add/Operator/switchMap';
import * as firebase from 'firebase';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>
  constructor(private AfAuth: AngularFireAuth, private userService: UsersService) {
    this.user$ = AfAuth.authState;
  }


  login() {
    this.AfAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.AfAuth.auth.signOut()
  }
  get APPUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.getUser(user.uid);
        return Observable.of(null);
      });
  }
}
