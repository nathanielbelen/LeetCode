/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            if (c === '(') {
                stack.unshift(')')
            } else if (c === '[') {
                stack.unshift(']')
            } else if (c === '{') {
                stack.unshift('}')
            }
        } else if (c === ')' || c === ']' || c === '}') {
            if (c === ')' && stack[0] === ')') {
                stack.shift();
            } else if (c === ']' && stack[0] === ']') {
                stack.shift();
            } else if (c === '}' && stack[0] === '}') {
                stack.shift();
            } else {
                return false;
            }
        }
    }
    if (!stack.length) {
        return true;
    } else {
        return false;
    }
};