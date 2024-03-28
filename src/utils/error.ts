export const displayErrorToUser = (error) => {
  let errorMessage = 'Something went wrong. Please try again later.';
  
  if (error instanceof TypeError) {
    errorMessage = 'Network error. Please check your connection.';
  } 

  else if (error.message) {
    errorMessage = error.message; // Assuming the API returns a human-readable message
  }

  // Display the message to the user
  // This could be a modal, an alert, or an inline error message in the UI
  // alert(errorMessage); // Example: Using an alert to simplify
  return errorMessage;
}