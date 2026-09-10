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
    return avg(root)[2]
    function avg(root: TreeNode | null): [number, number, number] { // count, sum, eq
        if(root == null) return [0, 0, 0];
        const [cl, sl, el] = avg(root.left);
        const [cr, sr, er] = avg(root.right);
        const sum = root.val + sl + sr;
        const count = cl + cr + 1;
        const calcAvg = Math.trunc(sum / count);
        return calcAvg == root.val ? [count, sum, el + er + 1] : [count, sum, el + er]; 
    }
};