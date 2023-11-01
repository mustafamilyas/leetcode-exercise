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

function findMode(root: TreeNode | null): number[] {
    if(!root) return []
    const map: Record<number, number> = {};
    const stack = [root];

    while(stack.length) {
        const top = stack.pop();
        if(map[top.val] == null) map[top.val] = 0;
        map[top.val]++
        if(top.left) stack.push(top.left)
        if(top.right) stack.push(top.right)
    }

    let result = []
    let count = 0;
    for(const [key, value] of Object.entries(map)) {
        if(count === value) {
            result.push(Number(key))
        } else if (value > count) {
            count = value;
            result = [Number(key)]
        }
    }
    return result;
};