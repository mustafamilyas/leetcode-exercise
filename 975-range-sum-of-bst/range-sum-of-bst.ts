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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if(root === null) return 0;
    let sum = 0;
    if(root.val >= low && root.val <= high) sum += root.val;
    if(root.val <= high && root.right) sum += rangeSumBST(root.right, low, high)
    if(root.val >= low && root.left) sum += rangeSumBST(root.left, low, high)
    return sum
};