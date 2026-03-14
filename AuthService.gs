/**
 * AuthService.gs - User Authentication
 * Captures current user email for audit tracking
 */

/**
 * Get the current user's email address
 * @return {string} User's email address
 */
function getUserEmail() {
  try {
    const email = Session.getActiveUser().getEmail();
    return email || 'unknown@example.com';
  } catch (error) {
    Logger.log('Error getting user email: ' + error.toString());
    return 'unknown@example.com';
  }
}

/**
 * Get the current user object
 * @return {Object} User object with email
 */
function getCurrentUser() {
  return {
    email: getUserEmail()
  };
}
