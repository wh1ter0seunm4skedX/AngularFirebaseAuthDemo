// Import the necessary Angular core module and AuthService for user authentication
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

// @Component decorator to define metadata for the SignUpComponent
@Component({
  selector: 'app-sign-up', // Define the custom HTML element tag for this component
  templateUrl: './sign-up.component.html', // Link to the HTML template file
  styleUrls: ['./sign-up.component.scss'], // Link to the styles for this component
})

// The SignUpComponent class declaration
export class SignUpComponent implements OnInit {
  // Constructor to inject the AuthService into the component
  constructor(public authService: AuthService) {}

  // ngOnInit lifecycle hook for initialization logic, executed after the component is constructed
  ngOnInit() {}
}
