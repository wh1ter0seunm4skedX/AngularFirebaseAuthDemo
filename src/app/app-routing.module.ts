import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing components for routing
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Importing the AuthGuard to protect routes that require authentication
import { AuthGuard } from './shared/guard/auth.guard';

// Definition of routes for the application
const routes: Routes = [
  // Redirects an empty path to the sign-in page as the default route
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // Route for the sign-in page
  { path: 'sign-in', component: SignInComponent },
  // Route for the sign-up (registration) page
  { path: 'register-user', component: SignUpComponent },
  // Route for the dashboard, protected by the AuthGuard to require authentication
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

// Decorator that marks a class as an NgModule and supplies configuration metadata
@NgModule({
  // Registers the routes for the application
  imports: [RouterModule.forRoot(routes)],
  // Exports RouterModule to make it available throughout the application
  exports: [RouterModule],
})

// AppRoutingModule class that will be imported in the app module
export class AppRoutingModule {}
