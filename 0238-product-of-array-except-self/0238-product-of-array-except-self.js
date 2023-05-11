/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = new Array(nums.length).fill(1)

    // handle prefix
    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= pre;
        pre *= nums[i];
    }

    // handle postfix
    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= post;
        post *= nums[i];
    }

    return output;
};