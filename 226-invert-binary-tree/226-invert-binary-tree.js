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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const dfs = (node) => {
        if (!node) return;
        let holder = node.right;
        node.right = node.left;
        node.left = holder;
        dfs(node.left)
        dfs(node.right)
        return;
    }
    dfs(root)
    return root;
};

// original iterative solution
// var invertTree = function(root) {
//     // shift remove from front of array
//     // push add to back
//     let queue = [root];
//     let holder;
//     let curr;
//     while (queue.length) {
//         curr = queue.shift();
//         if (curr !== null) {
//             holder = curr.left;
//             curr.left = curr.right;
//             curr.right = holder;
//             queue.push(curr.left, curr.right);   
//         }
//     }
//     return root;
// };