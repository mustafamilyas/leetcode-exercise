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

function findBottomLeftValue(root: TreeNode | null): number {
    if(root == null) return -1;
    let queue = [root];
    let leftmostValue = -1;
    while(queue.length) {
        leftmostValue = queue[0].val;
        const newQueue = []
        for(const node of queue) {
            node.left && newQueue.push(node.left)
            node.right && newQueue.push(node.right)
        }
        queue = newQueue
    }
    return leftmostValue 
};