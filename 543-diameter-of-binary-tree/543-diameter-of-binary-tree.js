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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let result = 0;
    const dfs = (node) => {
        if (!node) return -1;
        let left = dfs(node.left);
        let right = dfs(node.right);
        let diameter = left + right + 2
        result = result < diameter ? diameter : result;
        // height is 1 + max(left, right height)
        return 1 + Math.max(left, right);
    }
    
    dfs(root);

    return result;;
};