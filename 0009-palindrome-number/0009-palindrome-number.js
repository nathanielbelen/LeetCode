/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    let string = x.toString();
    
    if (string.length === 1) return true;
    
    let left = 0
    let right = string.length - 1;
    while (left < right) {
        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return false;
        }
    }
    return true;
};