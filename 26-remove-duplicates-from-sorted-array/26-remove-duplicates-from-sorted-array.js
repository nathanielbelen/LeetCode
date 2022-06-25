/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums
    }
    
    let current = nums[0];
    let counter = 1;
    
    for (let i = 1; i < nums.length; i++) {
        const number = nums[i]
        if (number !== current) {
            current = number
            nums[counter] = current
            if (counter !== i) {
                nums[i] = '_'
            }
            counter++
        } else {
            if (counter !== i) {
                nums[i] = '_'
            }
        }
    }
    return counter;
};