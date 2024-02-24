import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service'; // Import AuthService for authentication handling
import { Router } from '@angular/router'; // Import Router to navigate between routes

@Component({
  selector: 'app-dashboard', // Component's CSS selector
  templateUrl: './dashboard.component.html', // Path to the HTML template
  styleUrls: ['./dashboard.component.scss'], // Path to the styles for this component
})
export class DashboardComponent implements OnInit {
  // Constructor function to inject AuthService and Router services
  constructor(public authService: AuthService, private router: Router) {}

  // ngOnInit lifecycle hook: Executes when the component is initialized
  ngOnInit(): void {}

  // logout function: Calls the SignOut method from AuthService to log the user out
  logout(): void {
    this.authService.SignOut().then(() => {
      this.router.navigate(['sign-in']); // Redirects to the sign-in page after logging out
    });
  }
}
