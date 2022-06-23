/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0;
    let right = string.length - 1;
    let isPalindrome = true;
    while (right - left > 0) {
        if (string[left] !== string[right]) {
            isPalindrome = false;
        }
        left++;
        right--;
    }
    return isPalindrome;
};