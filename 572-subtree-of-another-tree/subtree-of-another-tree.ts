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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function isEqual(
        r: TreeNode | null, 
        sr: TreeNode | null
    ): boolean {
        if(r === null && sr === null) return true;
        if(r === null || sr === null) return false;
        return r.val === sr.val && 
            isEqual(r.left, sr.left) && 
            isEqual(r.right, sr.right) 
    }

    function check(
        r: TreeNode | null, 
        sr: TreeNode | null
    ): boolean {
        if(r === null || sr === null) return false;
        return isEqual(r, sr) || check(r.left, sr) || check(r.right, sr)
    }

    return check(root, subRoot)
};