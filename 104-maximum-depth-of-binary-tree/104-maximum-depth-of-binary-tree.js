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

var maxDepth = function(root) {
    const queue = [];
    if (root !== null) {
        queue.push({node: root, depth: 1})
    }
    let curr;
    let maxDepth = 0;
    while (queue.length) {
        curr = queue.shift();
        if (curr.node !== null) {
             if (curr.node.left !== null) {
                queue.push({node: curr.node.left, depth: curr.depth + 1});
            }
            if (curr.node.right !== null) {
                queue.push({node: curr.node.right, depth: curr.depth + 1});
            }   
        }
        maxDepth = curr.depth > maxDepth ? curr.depth : maxDepth;
    }
    return maxDepth;
};