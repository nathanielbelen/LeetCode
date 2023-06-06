/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = Infinity;
    let high = 0;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        let curr = prices[i]
            if (curr < high) {
            profit += high - low;
            low = curr;
            high = 0;
            continue
        }
        if (curr < low) { 
            low = curr;
            continue;
        }
        if (curr > high) {
            high = curr;
            continue;
        }
    }
    if (high) profit += high - low
    return profit;
};
