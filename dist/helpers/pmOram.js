export function pmOram(hour) {
    if (hour >= 12) {
        return "PM";
    }
    else {
        return "AM";
    }
}
