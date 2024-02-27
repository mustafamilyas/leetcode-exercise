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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let longest = 0;
    function recurse(root: TreeNode | null): number {
        if(root === null) return 0;
        const left = root.left ? (recurse(root.left) + 1) : 0;
        const right = root.right ? (recurse(root.right) + 1) : 0;
        longest = Math.max(longest, left + right);
        return Math.max(left, right)
    }
    const toLeafPathLongest = recurse(root)
    return Math.max(toLeafPathLongest, longest);
};