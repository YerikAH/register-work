export function validateInput(input, limit) {
    const valueInputNumber = parseInt(input.value);
    if (valueInputNumber >= limit) {
        return 0;
    }
    else {
        return valueInputNumber;
    }
}
