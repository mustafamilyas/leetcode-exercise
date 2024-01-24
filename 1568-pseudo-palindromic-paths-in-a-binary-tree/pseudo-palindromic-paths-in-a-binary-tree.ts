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
    function recursive(cur: TreeNode | null, counter: Map<number, number>) {
        if(cur === null) return 0;
        counter.set(cur.val, (counter.get(cur.val) ?? 0) + 1);
        if(cur.left === null && cur.right === null) {
            let isOddAlreadyExist = false;
            for(const value of counter.values()) {
                if(value % 2) {
                    if(isOddAlreadyExist) {
                        counter.set(cur.val, counter.get(cur.val) - 1)
                        return 0;
                    }
                    else isOddAlreadyExist = true;
                }
            }
            counter.set(cur.val, counter.get(cur.val) - 1)
            return 1;
        }
        let left = 0, right = 0;
        if(cur.right) right = recursive(cur.right, counter)
        if(cur.left) left = recursive(cur.left, counter);
        counter.set(cur.val, counter.get(cur.val) - 1)
        return left + right
    }
    return recursive(root, new Map())
};