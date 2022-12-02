export function validateInput(input, limit) {
    const regexNumber = /^[0-9]+$/;
    const valueNoSpace = input.value.trim();
    const valueInputNumber = !regexNumber.test(valueNoSpace)
        ? 999999
        : parseInt(valueNoSpace);
    if (valueInputNumber >= limit) {
        return 0;
    }
    else {
        return valueInputNumber;
    }
}
