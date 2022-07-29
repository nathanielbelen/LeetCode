/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pParents = [];
    let qParents = [];
    let LCA = root;
    const dfs = (root, parents = []) => {
        if (!root) return;
        let newParents = [...parents, root]
        if (root === p) {
            pParents = newParents;
        }
        if (root === q) {
            qParents = newParents;
        }
        dfs(root.left, newParents);
        dfs(root.right, newParents);
        return;
    }
    dfs(root)
    for (let i = 0; i < pParents.length; i++) {
        for (let j = 0; j < qParents.length; j++) {
            if (pParents[i] === qParents[j]) {
                LCA = pParents[i];
            }
        }
    }    
    return LCA;
};