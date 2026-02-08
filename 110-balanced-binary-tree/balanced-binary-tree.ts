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

function isBalanced(root: TreeNode | null): boolean {
    function depth(node: TreeNode| null): [number, boolean] {
        if(node == null) return [0, true];
        const [depthLeft, balancedLeft] = depth(node.left);
        const [depthRight, balancedRight] = depth(node.right);
        if(!balancedLeft || !balancedRight || Math.abs(depthRight - depthLeft) > 1) return [0, false];
        return [Math.max(depthRight, depthLeft) + 1, true]
    }
    const [_, balanced] = depth(root);
    return balanced;
};