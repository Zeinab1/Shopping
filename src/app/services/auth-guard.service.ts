import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import{Router, RouterStateSnapshot} from '@angular/router';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthService, private router:Router) { 
  }
  canActivate(router,state:RouterStateSnapshot){
  return this.authService.user$.map(
    user=>{
    if(user) {return true;}
      else
      {
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
        return false;
      }
    }
    )
  }
}