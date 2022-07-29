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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    exists = false;

    function dfs(node) {
        if (!node) return;

        if (node.val === subRoot.val) {
            if (compare(node, subRoot)) {
                exists = true;
                return
            }
        }

        dfs(node.left)
        dfs(node.right)
    }

    function compare(node, subnode) {
        if (!subnode && !node) return true;
        if (!subnode || !node) return false;
        if (node.val !== subnode.val) return false;
        return compare(node.left, subnode.left) && compare(node.right, subnode.right)
    }
    
    dfs(root);
    return exists;
};