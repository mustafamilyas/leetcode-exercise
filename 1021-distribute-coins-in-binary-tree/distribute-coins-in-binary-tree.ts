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

function distributeCoins(root: TreeNode | null): number {
    let movement = 0;

    function getRemaining(node: TreeNode | null): number {
        if(node === null) return 0;
        const leftNodes = getRemaining(node.left) 
        const rightNodes = getRemaining(node.right);
        const remaining = leftNodes + rightNodes + node.val - 1;
        movement += Math.abs(remaining);
        return remaining;
    }

    getRemaining(root);
    return movement;
};