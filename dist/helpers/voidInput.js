export function voidInput(...arg) {
    let validateInput = true;
    let noErrors = 0;
    arg.forEach((item) => {
        if (item.value === "" || item.value === " ") {
            noErrors++;
        }
    });
    if (noErrors === 0) {
        validateInput = false;
    }
    return validateInput;
}
