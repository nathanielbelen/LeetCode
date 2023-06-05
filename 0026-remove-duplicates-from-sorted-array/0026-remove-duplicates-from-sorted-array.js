/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let last;
    let unique = 0;
    let endOfLine = 0;
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (last !== curr) {
            nums[endOfLine] = curr
            endOfLine++
            last = curr
            unique++
        }
    }
    return unique;
}