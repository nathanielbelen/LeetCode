/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (let c of s) {
        map[c] = (map[c] || 0) + 1;
    }
    for (let e of t) {
        if (!map[e]) {
            return false;
        }
        map[e]--;
    }
    return true;
};