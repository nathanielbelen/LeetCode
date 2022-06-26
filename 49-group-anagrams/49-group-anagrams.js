/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // declare map
  let map = {};
  // loop through input array
  for (let i = 0; i < strs.length; i++) {
    //     convert word to sorted lowercase string
    let sorted = strs[i].toLowerCase().split('').sort().join('');
    //     if map.sorted exists, push to array
    if (map[sorted]) {
      map[sorted].push(strs[i]);
    } else {
    //     if not, set it to be an array with word inside of it
      map[sorted] = [strs[i]]
    }
  }

  // declare answer array
  let answer = [];
  // loop through map object
  for (let string in map) {
    //     push each value into answer array
    answer.push(map[string]);
  }
  // return answer array
  return answer;
};