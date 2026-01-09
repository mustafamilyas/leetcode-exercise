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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    function recurse(node: TreeNode | null, depth: number): [TreeNode | null, number] {
        if(node == null || (node.left == null && node.right == null)) return [node, depth];
        const [leftAncestor, leftDepth] = recurse(node.left, depth + 1);
        const [rightAncestor, rightDepth] = recurse(node.right, depth + 1);
        if(leftAncestor && rightAncestor && leftDepth == rightDepth) return [node, leftDepth]
        if(rightAncestor == null || (leftDepth > rightDepth)) return [leftAncestor, leftDepth]
        return [rightAncestor, rightDepth]
    }
    const [ancestor] = recurse(root, 0);
    return ancestor
};