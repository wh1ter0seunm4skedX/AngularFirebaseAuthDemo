/**
 * Represents the structure of a user entity within the application.
 */
export interface User {
  /**
   * Unique identifier for the user.
   * This is typically the same UID provided by Firebase Authentication.
   */
  uid: string;

  /**
   * The user's email address.
   * This should be unique and is used for sign-in purposes.
   */
  email: string;

  /**
   * The user's display name.
   * This can be used across the application to refer to the user in a more personal manner.
   */
  displayName: string;

}
