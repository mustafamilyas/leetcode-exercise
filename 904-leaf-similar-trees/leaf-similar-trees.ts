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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaf1 = getLeaf(root1);
    const leaf2 = getLeaf(root2);
    if(leaf1.length !== leaf2.length) return false;
    for(let i = 0; i < leaf1.length; i++) {
        if(leaf1[i] !== leaf2[i]) return false;
    }
    return true;
};

function getLeaf(root: TreeNode | null): Array<number> {
    if(root === null) return [];
    if(root.left == null && root.right == null) return [root.val];
    return [...getLeaf(root.left), ...getLeaf(root.right)]
}