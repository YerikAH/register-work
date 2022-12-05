export function pushZero(convertNum: number): string {
  if (convertNum < 10) {
    return `0${convertNum}`;
  } else {
    return `${convertNum}`;
  }
}
