import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';

// Marks the class as available to be provided and injected as a dependency in root level.
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  // Dependency injection of AuthService and Router.
  constructor(public authService: AuthService, public router: Router) {}

  // Method to determine if a route can be activated.
  canActivate(
    next: ActivatedRouteSnapshot, // Contains the future route that will be activated.
    state: RouterStateSnapshot // Represents the state of the router at a moment in time.
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    // Checks if the user is logged in by calling isLoggedIn on AuthService.
    if (this.authService.isLoggedIn !== true) {
      // If not logged in, redirect to the sign-in page.
      this.router.navigate(['sign-in']);
      return false; // Prevents the activation of the route.
    }
    // Allows the route to be activated if the user is logged in.
    return true;
  }
}
