/*
 @param {string} s
 @return {boolean}
*/
var isValid = function (s) {
  let open = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      open.unshift(s[i]);
    } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      if (isMatching(s[i], open[0])) {
        open.shift();
      } else {
        return false;
      }
    }
  }
  if (open.length === 0) {
    return true;
  } else {
    return false;
  }
};

let isMatching = (closed, open) => {
  if (closed === ')') {
    if (open !== '(') {
      return false;
    }
    return true;
  }
  if (closed === ']') {
    if (open !== '[') {
      return false;
    }
    return true;
  }
  if (closed === '}') {
    if (open !== '{') {
      return false;
    }
    return true;
  }
  return false;
};
