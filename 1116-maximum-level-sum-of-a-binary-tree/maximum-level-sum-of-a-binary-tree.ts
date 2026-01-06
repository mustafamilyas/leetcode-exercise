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

function maxLevelSum(root: TreeNode | null): number {
    if(root === null) return 0;
    const memo = [];
    function traverse(root: TreeNode | null | undefined, level: number) {
        if(root == null) return;
        if(memo[level - 1]) memo[level - 1] += root.val;
        else memo.push(root.val);
        traverse(root?.left, level+1)
        traverse(root?.right, level+1)
    }
    traverse(root, 1);
    let maxLevel = 0;
    let maxValue = memo[0];
    for(let i = 1; i < memo.length; i++) {
        if(memo[i] > maxValue) {
            maxLevel = i;
            maxValue = memo[i];
        }
    }
    return maxLevel + 1;
};