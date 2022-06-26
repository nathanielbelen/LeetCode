/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    nums.forEach((num) => {
        if (map[num] === undefined) {
            map[num] = 0;
        } else {
            map[num]++;
        }
    })
    
    let frequency = [];
    for (let number in map) {
        frequency.push([Number(number), map[number]])
    }
    frequency.sort(function(a, b) {
        return b[1] - a[1]
    })
    answer = [];
    for (let i = 0; i < k; i++) {
        answer.push(parseInt(frequency[i]));
    }
    return answer;
};