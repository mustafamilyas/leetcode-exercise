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

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    const result = [];

    function distanceFromNode(root: TreeNode | null) {
        if(root === null) return Number.MAX_SAFE_INTEGER;
        if(root.val === target.val) {
            if(k === 0) {
                result.push(root.val)
                return;
            }
            traverseNodeUntil(root.left, 1)
            traverseNodeUntil(root.right, 1)
            return 1;
        }
        const leftDistance = distanceFromNode(root.left)
        const rightDistance = distanceFromNode(root.right)
        const minChildDistance = Math.min(leftDistance, rightDistance);
        if(minChildDistance === k) {
            result.push(root.val)
            return;
        }
        if(minChildDistance === Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
        if(leftDistance === Number.MAX_SAFE_INTEGER) {
            traverseNodeUntil(root.left, minChildDistance + 1)
        } else {
            traverseNodeUntil(root.right, minChildDistance + 1)
        }
        return minChildDistance + 1;
    }

    function traverseNodeUntil(root: TreeNode | null, depth: number) {
        if(root === null) return;
        if(depth === k) {
            result.push(root.val)
            return;
        }
        traverseNodeUntil(root.left, depth + 1)
        traverseNodeUntil(root.right, depth + 1)
    }

    distanceFromNode(root)
    return result;
};