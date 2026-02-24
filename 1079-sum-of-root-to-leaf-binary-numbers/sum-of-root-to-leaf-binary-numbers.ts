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

function sumRootToLeaf(root: TreeNode | null): number {
    return sum(root, 0);

    function sum(root: TreeNode | null, prev: number): number {
        if(root == null) return prev;
        const current = prev << 1 | root.val;
        if(root.left && root.right) {
            const left = sum(root.left, current);
            const right = sum(root.right, current);
            return left + right;
        }
        if(root.left) return sum(root.left, current);
        return sum(root.right, current);
    }
};