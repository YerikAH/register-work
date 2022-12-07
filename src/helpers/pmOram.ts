export function pmOram(hour: number): string {
  if (hour >= 12) {
    return "PM";
  } else {
    return "AM";
  }
}
