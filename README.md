# Angular Firebase Authentication Demo

![Sign-In page](https://i2.paste.pics/0474fc7500447d134ee7f13a50f0c48d.png)
![Sign-Up page](https://i2.paste.pics/c82d7e00c34db8f28770e5eb75ce2c74.png)
![Sign-In page](https://i2.paste.pics/e524bf34dd27a44ca113651eeb889411.png)



This project demonstrates the integration of Angular with Firebase Authentication, providing a template for sign-up, sign-in, and logout functionalities. It's designed as a starting point for web applications requiring user authentication.

## Features

- User Sign-Up with email and password.
- User Sign-In with email and password.
- Logout functionality.
- Angular Material design for UI components.
- Responsive design for various screen sizes.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Angular CLI installed (`npm install -g @angular/cli`).
- A Firebase project.

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/wh1ter0seunm4skedX/AngularFirebaseAuthDemo.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```
   
3. **Configure Firebase:**

   - Create a Firebase project in the Firebase Console.
   - Add a web app to your Firebase project and copy the Firebase config object.
   - Place your Firebase config in `src/environments/environment.ts`.
   - If you having trouble - look into "Firebase Configuration in more detail" section

4. **Run the development server:**

   ```bash
   ng serve
   ```

   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase Configuration in more detail 

The current Firebase configuration details are placeholders tied to a demo project. You should replace them with your own Firebase project details to connect the application to your Firebase database and authentication services.

A) **Locate the Firebase configuration in your project:**

   Navigate to `src/environments/environment.ts`. You'll find the Firebase configuration object that looks like this:

   ```typescript
   export const environment = {
     production: false,
     firebase: {
       apiKey: "AIzaSyCxGu31FemX5g0QcyT5VDQ3QnFpBreoKQI",
       authDomain: "angularfirebaseauthdemo.firebaseapp.com",
       projectId: "angularfirebaseauthdemo",
       storageBucket: "angularfirebaseauthdemo.appspot.com",
       messagingSenderId: "166023179427",
       appId: "1:166023179427:web:f3cc1a599ada1bf0a7e316"
     }
   };
```

Replace the above details with those of your Firebase project, which you can find in your Firebase Console under your project settings.

Example:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "<YOUR_API_KEY>",
    authDomain: "<YOUR_AUTH_DOMAIN>",
    projectId: "<YOUR_PROJECT_ID>",
    storageBucket: "<YOUR_STORAGE_BUCKET>",
    messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
    appId: "<YOUR_APP_ID>"
  }
};
```

Ensure you replace <YOUR_API_KEY>, <YOUR_AUTH_DOMAIN>, and other placeholders with the actual configuration values from your Firebase project.

B) Save the changes:

After updating the configuration, save the file. Your Angular application is now connected to your Firebase project.


## Usage

- **Sign Up**: New users can sign up using their email and password.
- **Sign In**: Existing users can sign in using their credentials.
- **Logout**: Signed-in users can log out from the application.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with any enhancements, bug fixes, or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

Be sure to replace placeholder links and instructions with specifics for your project.
