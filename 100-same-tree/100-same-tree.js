/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let identical = true;
    const search = (node1, node2) => {
        
        if ((!node1 && node2) || (node1 && !node2)) {
            identical = false;
            return;
        }
        
        else if (!node1 && !node2) {
            return
        }
        
        search(node1.left, node2.left);
        search(node1.right, node2.right);
        
        if (node1.val !== node2.val) {
            identical = false;
            return
        }
        
        return;
        
    };
    
    search(p, q);
    return identical;
    
};

// set identical variable = true;
// dfs tree1, tree2
//     if (!tree1 && tree2 || tree1 && !tree2)
//         identical = false;
//         return;
//     else if (both nodes dont exist) {
//         return;
//     }
//     if (node1.val !== node2.val) {
//         identical = false;
//     }
//     dfs(tree1.left, tree2.left)
//     dfs(tree1.right, tree2.right)
//     return 

// dfs(tree1, tree2)
// return identical;