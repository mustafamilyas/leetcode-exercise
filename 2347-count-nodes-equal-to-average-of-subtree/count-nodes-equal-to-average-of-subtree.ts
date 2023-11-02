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

function averageOfSubtree(root: TreeNode | null): number {
    let counter = 0;

    function recurse(node: TreeNode | null): {
        node: number,
        sum: number
    } {
        if(node === null) return {
            node: 0,
            sum: 0
        };
        const rightValue = recurse(node.left);
        const leftValue = recurse(node.right);
        const sum = node.val + rightValue.sum + leftValue.sum;
        const numNode = rightValue.node + leftValue.node + 1;
        const avg = Math.floor(sum / numNode);

        if(avg === node.val) counter++;
        
        return {
            sum,
            node: numNode
        }
    }

    recurse(root)
    return counter;
};