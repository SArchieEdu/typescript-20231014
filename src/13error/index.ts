try {
  throw {};
  throw undefined;
} catch (error: unknown) {
  console.log(getErrorMessage(error));
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Error";
}
