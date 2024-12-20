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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if(root === null) return root;
    let queue = [root], level = 0;
    while(queue.length) {
        const next = [];
        for(const node of queue) {
            if(node.left) next.push(node.left)
            if(node.right) next.push(node.right)
        }
        if(level % 2) {
            for(let i = 0; i < queue.length / 2; i++) {
                const temp = queue[i].val;
                queue[i].val = queue[queue.length - 1 - i].val;
                queue[queue.length - 1 - i].val = temp;
            }
        }
        queue = next;
        level++;
    }
    return root;
};