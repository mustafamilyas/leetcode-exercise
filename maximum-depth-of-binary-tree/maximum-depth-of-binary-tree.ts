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

function maxDepth(root: TreeNode | null): number {
    function traverse(root: TreeNode | null, depth: number): number {
        if(root === null) return depth;

        const left = traverse(root.left, depth + 1)
        const right = traverse(root.right, depth + 1)
        return Math.max(left, right);
    }

    return traverse(root, 0)
};