export function validateInput(input: HTMLInputElement, limit: number): number {
  const regexNumber = /^[0-9]+$/;
  const valueNoSpace = input.value.trim();
  const valueInputNumber: number = !regexNumber.test(valueNoSpace)
    ? 999999
    : parseInt(valueNoSpace);
  if (valueInputNumber >= limit) {
    return 0;
  } else {
    return valueInputNumber;
  }
}
