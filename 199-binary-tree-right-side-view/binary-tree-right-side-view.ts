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

function rightSideView(root: TreeNode | null): number[] {
    if(root === null) return []
    const right = rightSideView(root.right) 
    const left = rightSideView(root.left)
    if(left.length > right.length) return [root.val, ...right, ...left.slice(right.length)]
    return [root.val, ...right]  
};