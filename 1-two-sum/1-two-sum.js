/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (map[num] !== undefined) {
            return [i, map[num]];
        }
        map[target-num] = i;
    }
};