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

function smallestFromLeaf(root: TreeNode | null): string {
    let min = ''
    function recurse(node: TreeNode | null, str: string) {
        if(node === null) return;
        const curStr = String.fromCharCode(node.val + 97) + str;
        if(!node.left && !node.right) {
            if((min && curStr < min) || !min) min = curStr
            return;
        }
        recurse(node.left, curStr)
        recurse(node.right, curStr)
    }
    recurse(root, '')
    return min
};