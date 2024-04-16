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

function addOneRow(root: TreeNode | null, val: number, depth: number, isLeft: boolean = true): TreeNode | null {
    if(depth === 1) {
        const newNode = new TreeNode(val)
        if(isLeft) newNode.left = root;
        else newNode.right = root;
        return newNode;
    }
    if(root === null) return root;
    root.left = addOneRow(root.left, val, depth - 1, true);
    root.right = addOneRow(root.right, val, depth - 1, false);
    return root;
};