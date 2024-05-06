export const errorHandler = (errorCode) => {
    switch (errorCode) {
        case 'auth/invalid-login-credentials':
            return 'Invalid credentials.';
        case 'auth/email-already-in-use':
            return 'The email address is already in use by another user.';
        case 'auth/invalid-email':
            return 'The email address is not valid.';
        case 'auth/user-not-found':
            return 'There is no user record corresponding to this email.';
        case 'auth/wrong-password':
            return 'The password is invalid or the user does not have a password.';
        case 'auth/weak-password':
            return 'The password must be at least 6 characters long.';
        case 'auth/network-request-failed':
            return 'A network error has occurred,look at your internet connection.';
        case 'auth/too-many-requests':
            return 'Too many unsuccessful login attempts. The user is temporarily blocked.';
        default:
            return 'Something wrong. Try again.';
    }
};