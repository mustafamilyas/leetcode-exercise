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

function pseudoPalindromicPaths (root: TreeNode | null): number {
    function recursive(cur: TreeNode | null, counter: Set<number>) {
        if(cur === null) return 0;
        counter.has(cur.val) ? counter.delete(cur.val) : counter.add(cur.val)
        if(cur.left === null && cur.right === null) {
            const size = counter.size; 
            counter.has(cur.val) ? counter.delete(cur.val) : counter.add(cur.val)
            return size > 1 ? 0 : 1;
        }
        let left = 0, right = 0;
        if(cur.right) right = recursive(cur.right, counter)
        if(cur.left) left = recursive(cur.left, counter);
        counter.has(cur.val) ? counter.delete(cur.val) : counter.add(cur.val)
        return left + right
    }
    return recursive(root, new Set())
};