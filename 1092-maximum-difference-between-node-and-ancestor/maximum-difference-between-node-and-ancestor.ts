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

function maxAncestorDiff(root: TreeNode | null): number {
    let maxDiff = 0;
    function recursive(cur: TreeNode | null, max: number, min: number) {
        if(cur === null) return;
        maxDiff = Math.max(maxDiff, Math.abs(max - cur.val), Math.abs(min - cur.val));
        max = Math.max(max, cur.val)
        min = Math.min(min, cur.val)
        recursive(cur.left, max, min)
        recursive(cur.right, max, min)
    }
    root?.left && recursive(root.left, root.val, root.val);
    root?.right && recursive(root.right, root.val, root.val);
    return maxDiff;
};