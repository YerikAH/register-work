export function validateInput(input, limit) {
    const regexNumber = /^[0-9]+$/;
    const valueNoSpace = input.value.trim();
    if (regexNumber.test(valueNoSpace)) {
        const numberCorrect = parseInt(valueNoSpace);
        if (numberCorrect >= limit) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}
