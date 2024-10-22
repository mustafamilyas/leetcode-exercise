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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    if(root == null) return -1;
    const levelSums = [];
    let queue = [root]
    while(queue.length) {
        const nextQueue = []
        let sum = 0;
        for(const node of queue) {
            sum += node.val;
            if(node.left) nextQueue.push(node.left)
            if(node.right) nextQueue.push(node.right)
        }
        levelSums.push(sum)
        queue = nextQueue
    }
    if(k > levelSums.length) return -1;
    levelSums.sort((a,b)=>b-a);
    return levelSums[k - 1] ?? - 1;
};