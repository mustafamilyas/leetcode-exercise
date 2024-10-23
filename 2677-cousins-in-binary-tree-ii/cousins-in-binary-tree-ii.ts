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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    if(root == null) return null;
    let queue: [TreeNode, number][] = [[root, 0]];
    let sameParentSum = [root.val];
    while(queue.length) {
        const nextQueue: [TreeNode, number][] = [];
        const nextParentSum = [];
        let counter = 0;
        let sum = 0;
        for(const [node] of queue) {
            nextParentSum.push(0)
            sum += node.val
            if(node.left) {
                nextQueue.push([node.left, counter])
                nextParentSum[counter] += node.left.val;
            }
            if(node.right) {
                nextQueue.push([node.right, counter])
                nextParentSum[counter] += node.right.val;
            }
            counter++
        }
        for(const [node, nodeIndex] of queue) {
            node.val = sum - sameParentSum[nodeIndex]
        }
        queue = nextQueue;
        sameParentSum = nextParentSum;
    }
    return root;
};