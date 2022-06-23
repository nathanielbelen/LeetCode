/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let left = 0;
    let right = 1;
    if (prices.length < 2) {
        return max;
    }
    while (right < prices.length) {
        if (prices[right] < prices[left]) {
            left = right;
            continue;
        } else if (prices[right] - prices[left] > max) {
            max = prices[right] - prices[left];
        }
        right++
    }
    return max;
};
