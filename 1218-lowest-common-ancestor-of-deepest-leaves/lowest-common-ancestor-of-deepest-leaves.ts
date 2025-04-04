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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    return recurse(root, 0)[0]
};

function recurse(root: TreeNode | null, depth: number): [TreeNode | null, number] {
    if(root == null) return [root, -1]
    if(root.left == null && root.right == null) return [root, depth]
    const left = recurse(root.left, depth + 1);
    const right = recurse(root.right, depth + 1);
    if(left[1] == right[1]) return [root, right[1]]
    if(left[1] > right[1]) return left
    return right;
}