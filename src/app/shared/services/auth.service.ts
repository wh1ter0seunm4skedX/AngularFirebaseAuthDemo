import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public snackBar: MatSnackBar, // Inject MatSnackBar
  public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  SignUp(email: string, password: string): Promise<void> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        // Display success message with MatSnackBar
        this.snackBar.open('Registration successful! Redirecting to login page...', 'Close', {
          duration: 3000, // Adjust duration as needed
        });

        setTimeout(() => {
          this.router.navigate(['/sign-in']); // Navigate after the snackbar has been displayed
        }, 3000);

        return null; // No error
      })
      .catch((error) => {
        window.alert(error.message); // Consider using MatSnackBar here as well for consistency
      });
  }


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null; // Check if the user object exists
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
