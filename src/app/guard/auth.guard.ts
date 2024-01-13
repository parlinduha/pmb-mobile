import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRoles = (route.data as { roles: string[] }).roles;
    // console.log('Expected Roles:', expectedRoles);

    const userActiveString = localStorage.getItem('userActive');
    const userActive = userActiveString ? JSON.parse(userActiveString) : null;
    // console.log('User Active:', userActive);

    if (userActive && expectedRoles.includes(userActive.role)) {
      console.log('User has the expected roles. Access granted.');
      return true;
    } else {
      // Redirect unauthenticated users to the login page
      if (!userActive) {
        // console.log('User not authenticated. Redirecting to login.');
        this.router.navigate(['/login']);
      } else {
        // Redirect to unauthorized page if the user has no expected role
        // console.log('User lacks expected roles. Redirecting to unauthorized.');
        this.router.navigate(['/unauthorized']);
      }

      return false;
    }
  }
}
