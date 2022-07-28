/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let state = true;
    const findHeight = (node) => {
        if (!node) return 0;
        let left = findHeight(node.left);
        let right = findHeight(node.right)
        if (Math.abs(left - right) > 1) {
            state = false;
            return;
        }
        return 1 + Math.max(left, right);
    }
    findHeight(root);
    return state;
};