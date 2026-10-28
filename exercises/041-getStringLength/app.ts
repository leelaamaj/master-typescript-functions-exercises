function getStringLength(string: string): number {
  let count = 0;
  while (string.slice(count, count + 1) !== "") {
    count++;
  }
  return count;
}
export {};
