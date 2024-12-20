// Two sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9 -----> Output: [0,1]
// Input: nums = [3,2,4], target = 6 -----> Output: [1,2]
// Input: nums = [3,3], target = 6 -----> Output: [0,1]

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 17));

// second way

const twoSum2 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [-1, -1];
};

console.log(twoSum2([2, 7, 11, 15], 17));
