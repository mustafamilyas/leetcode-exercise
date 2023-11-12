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

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null) return []
    let queue = [root]
    const result = [];

    while(queue.length) {
        const childQueue = []
        const localResult = []
        for(const node of queue) {
            localResult.push(node.val)
            if(node.left) childQueue.push(node.left)
            if(node.right) childQueue.push(node.right)
        }
        result.push(localResult);
        queue = childQueue
    }
    
    return result;
};