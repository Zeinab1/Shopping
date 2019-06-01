import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [UsersService],

})
export class AppComponent {
  title = 'itshare-app';
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userService.save(user); 
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        router.navigateByUrl(returnUrl);
      }
    })
  }
}
