"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAverageOfNumbers(nums) {
    return nums.length === 0 ? 0 : nums.reduce((total, num) => total + num, 0) / nums.length;
}
