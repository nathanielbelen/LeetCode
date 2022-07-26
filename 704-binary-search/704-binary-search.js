/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // nums.length - 1 = last index
  // [0, 1, 2, 3, 4, 5, 6]
  // pick middle index
  // if target < middle index, it's within 0 and middle index - 1
  // >, between middle index + 1 and max
  // recurse
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let middle = nums[Math.floor((low+high)/2)]
    if (middle === target) {
      return Math.floor((low+high)/2);
    } else if (middle < target) {
      low = Math.floor((low+high)/2) + 1;
    } else if (middle > target) {
      high = Math.floor((low+high)/2) - 1;
    }
  }
  return -1
};