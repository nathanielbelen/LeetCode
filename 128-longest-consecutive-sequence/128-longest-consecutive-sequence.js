/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numbers = new Set(nums)
    let maxScore = 0;
    for (let num of numbers) {
        let score = 0;
        if (numbers.has(num - 1)) {
            continue;
        }
        let counter = 0
        while (numbers.has(num + counter)) {
            score++
            counter++
        }
        maxScore = Math.max(maxScore, score);
    }
    return maxScore;
};