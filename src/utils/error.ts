export const getErrorMessage = (error: unknown) => {
  let message = "An unexpected error occurred";
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }

  return message;
};