/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numbers = new Set(nums)
    let maxScore = 0;
    for (let num of numbers) {
        let score = 1;
        let counter = 1
        if (numbers.has(num - 1)) {
            continue;
        }
        while (numbers.has(num + counter)) {
            score++
            counter++
        }
        maxScore = Math.max(maxScore, score);
    }
    return maxScore;
};