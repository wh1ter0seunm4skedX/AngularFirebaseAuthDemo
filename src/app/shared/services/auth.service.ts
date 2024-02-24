import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

// Marks the class as available for dependency injection, with root level scope.
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Stores the current user's data.
  userData: any;

  constructor(
    public afs: AngularFirestore, // Injects the Firestore service for database operations.
    public afAuth: AngularFireAuth, // Injects the Firebase Authentication service.
    public router: Router, // Provides navigation and URL manipulation capabilities.
    public snackBar: MatSnackBar, // Material Design snack bar for displaying brief messages.
    public ngZone: NgZone // Service for executing work inside or outside of the Angular zone.
  ) {
    // Listens for changes to the authState to automatically set or clear userData.
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  // Handles user sign-in with email and password.
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        this.router.navigate(['dashboard']); // Redirects the user to the dashboard after successful sign-in.
      })
      .catch(error => {
        window.alert(error.message); // Displays an alert if there's a sign-in error.
      });
  }

  // Handles new user registration with email and password.
  SignUp(email: string, password: string): Promise<void> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        // Shows a snack bar with a success message.
        this.snackBar.open('Registration successful! Redirecting to login page...', 'Close', {
          duration: 3000,
        });

        setTimeout(() => {
          this.router.navigate(['/sign-in']); // Redirects to the sign-in page after a delay.
        }, 3000);

        return null;
      })
      .catch((error) => {
        window.alert(error.message); // Displays an alert if there's a registration error.
      });
  }

  // Checks if the user is currently logged in by examining local storage.
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // Updates or sets user data in Firestore on login or registration.
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef.set(userData, {
      merge: true, // Merges the document if it already exists.
    });
  }

  // Handles user sign-out and clears local storage.
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']); // Redirects to the sign-in page after sign-out.
    });
  }
}
