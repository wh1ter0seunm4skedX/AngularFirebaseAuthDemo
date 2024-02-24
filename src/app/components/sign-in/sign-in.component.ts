import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service'; // Import the AuthService

// Decorator to define a component
@Component({
  selector: 'app-sign-in', // Defines the custom HTML tag for this component
  templateUrl: './sign-in.component.html', // Path to the HTML template
  styleUrls: ['./sign-in.component.scss'], // Path to the styles for this component
})

// SignInComponent class that implements the OnInit interface
export class SignInComponent implements OnInit {
  // Constructor to inject AuthService into the component
  constructor(public authService: AuthService) {}

  // ngOnInit lifecycle hook: Called once the component is initialized
  ngOnInit() {}
}
