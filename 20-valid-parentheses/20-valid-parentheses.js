/*
 @param {string} s
 @return {boolean}
*/
var isValid = function(s) {
  let open = [];
  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])) {
      open.unshift(s[i])
    } else if (isClosed(s[i])) {
      if (isMatching(s[i], open[0])) {
        open.shift()
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
}

let isClosed = (char) => {
  switch (char) {
    case ')':
    case ']':
    case '}':
      return true;
    default: 
      return false;
  }
}

let isOpen = (char) => {
  switch (char) {
    case '(':
    case '{':
    case '[':
      return true;
    default:
      return false;
  }
}

let isMatching = (closed, open) => {
  if (isClosed(closed)) {
    if (closed === ')') {
      if (open !== '(') {
        return false;
      }
      return true;
    };
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
  }
  return false;
}