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

function sumNumbers(root: TreeNode | null): number {
    let sum = 0;
    function recurse(node: TreeNode | null, acc: number = 0) {
        if(node == null) return;
        const nextAcc = acc * 10 + node.val;
        if(node.left === null && node.right === null) return sum += nextAcc
        node.left && recurse(node.left, nextAcc);
        node.right && recurse(node.right, nextAcc);
    }
    recurse(root)
    return sum;
};