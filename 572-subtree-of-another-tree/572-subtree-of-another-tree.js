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

    function search(node) {
        if (!node) return false;
        if (node.val === subRoot.val) {
            if (compare(node, subRoot)) return true;
        }
        return search(node.left) || search(node.right)
    }

    function compare(node, subnode) {
        if (!subnode && !node) return true;
        if (!subnode || !node) return false;
        if (node.val !== subnode.val) return false;
        return compare(node.left, subnode.left) && compare(node.right, subnode.right)
    }
    
    return search(root)
};