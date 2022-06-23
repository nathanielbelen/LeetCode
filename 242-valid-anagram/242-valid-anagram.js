/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr1 = s.split('');
    const arr2 = t.split('');
    const map = {};
    
    for (let c of arr1) {
        map[c] = (map[c] || 0) + 1;
    }
    
    for (let e of arr2) {
        if (!map[e]) {
            return false;
        }
        map[e]--
    }
    
    for (let letter in map) {
        if (map[letter]) {
            return false;
        }
    }
    
    return true;
    //return s.split('').sort().join() === t.split('').sort().join();
};