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

function generateTrees(n: number): Array<TreeNode | null> {
    function recurse(start: number, end: number): Array<TreeNode | null> {
        if(end < start) return [null];
        if(start === end) return [new TreeNode(start)];
        
        const result = []

        for(let i = start; i <= end; i++) {
            const leftChildren = recurse(start, i - 1);
            const rightChildren = recurse(i + 1, end);
            for(const left of leftChildren) {
                for(const right of rightChildren) {
                    result.push(new TreeNode(i, left, right))
                }
            }
        }
        return result;
    }
    return recurse(1, n);
};