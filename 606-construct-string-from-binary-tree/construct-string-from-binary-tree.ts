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

function tree2str(root: TreeNode | null): string {
    if(root === null) return '';
    let str = root.val.toString();
    const left =  tree2str(root.left);
    const right =  tree2str(root.right);
    if(right) {
      str += `(${left})(${right})`
    } else if (left) {
      str += `(${left})`
    }
    return str;
};