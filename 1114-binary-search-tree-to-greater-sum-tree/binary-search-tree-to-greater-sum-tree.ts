/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function bstToGst(root: TreeNode | null): TreeNode | null {
    if(root === null) return root;
    modify(root, null)
    return root;
    function modify(cur: TreeNode | null, parent: TreeNode | null) {
        if(cur === null) return cur;
        const right = modify(cur.right, parent);
        cur.val += (right?.val ?? parent?.val ?? 0);
        const left = modify(cur.left, cur);
        return left ?? cur;
    }
};