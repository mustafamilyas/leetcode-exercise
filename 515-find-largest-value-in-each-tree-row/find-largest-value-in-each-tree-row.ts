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

function largestValues(root: TreeNode | null): number[] {
    if(root == null) return [];
    const result = [];
    let queue = [root]
    while(queue.length) {
        const children = []
        let max = Number.MIN_SAFE_INTEGER;
        for(const node of queue) {
            max = Math.max(node.val, max);
            if(node.left) children.push(node.left)
            if(node.right) children.push(node.right)
        }
        result.push(max)
        queue = children;
    }
    return result;
};