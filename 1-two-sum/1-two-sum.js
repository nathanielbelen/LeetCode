/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dictionary = {};
    for (let i = 0; i < nums.length; i++) {
        if (dictionary[nums[i]] !== undefined) return [dictionary[nums[i]], i];
        dictionary[target - nums[i]] = i;
    }
};