import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()) {
        if (route.data.role && route.data.role.indexOf(this.authService.getRole()) === -1) {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }