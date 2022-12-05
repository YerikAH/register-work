export function pushZero(convertNum) {
    if (convertNum < 10) {
        return `0${convertNum}`;
    }
    else {
        return `${convertNum}`;
    }
}
