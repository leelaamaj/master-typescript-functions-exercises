function isEitherEvenAndLessThan9(num1: number, num2: number): boolean {
  return (num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9;
}
export {};
