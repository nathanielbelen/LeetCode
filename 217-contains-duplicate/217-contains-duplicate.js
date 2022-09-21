/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dictionary = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (dictionary[num]) return true;
        dictionary[num] = true;
    }
    return false;
};