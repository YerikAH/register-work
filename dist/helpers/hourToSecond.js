export function hourToSecond(hour) {
    if (hour === 0) {
        return 3600;
    }
    else {
        const result = hour * 3600;
        return result;
    }
}
