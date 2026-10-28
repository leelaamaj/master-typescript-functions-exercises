function computeAverageOfNumbers(nums: number[]): number {
  return nums.length === 0 ? 0 : nums.reduce((total, num) => total + num, 0) / nums.length;
}
export {};
