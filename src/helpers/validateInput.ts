export function validateInput(input: HTMLInputElement, limit: number): boolean {
  const regexNumber = /^[0-9]+$/;
  const valueNoSpace = input.value.trim();
  if (regexNumber.test(valueNoSpace)) {
    const numberCorrect = parseInt(valueNoSpace);
    if (numberCorrect >= limit) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
