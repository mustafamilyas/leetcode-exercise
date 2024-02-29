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

function isEvenOddTree(root: TreeNode | null): boolean {
    if(root == null) return false;
    let level = 0;
    let queue = [root];
    while(queue.length) {
        const nextQueue = [];
        for(let i = 0; i < queue.length; i++) {
            if(level % 2) {
                if(queue[i].val % 2 === 1) return false;
                if(i > 0 && queue[i - 1].val <= queue[i].val) return false;
            } else {
                if(queue[i].val % 2 === 0) return false;
                if(i > 0 && queue[i - 1].val >= queue[i].val) return false;
            }
            queue[i].left && nextQueue.push(queue[i].left)
            queue[i].right && nextQueue.push(queue[i].right)
        }
        level++
        queue = nextQueue;
    }
    return true;
};