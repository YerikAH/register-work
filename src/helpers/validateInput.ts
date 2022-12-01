export function validateInput(input: HTMLInputElement, limit: number): number {
  const valueInputNumber: number = parseInt(input.value);
  if (valueInputNumber >= limit) {
    return 0;
  } else {
    return valueInputNumber;
  }
}
