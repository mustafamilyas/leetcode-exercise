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

function amountOfTime(root: TreeNode | null, start: number): number {
    let max = 0;
    function recursive(cur: TreeNode | null) {
        if(cur === null) return [0, false]
        if(cur.val === start) {
            const [leftValue] = recursive(cur.left)
            const [rightValue] = recursive(cur.right);
            max = Math.max(max, leftValue, rightValue);
            return [1, true]
        }
        const [leftValue, foundOnLeft] = recursive(cur.left);
        const [rightValue, foundOnRight] = recursive(cur.right);

        if(foundOnLeft || foundOnRight) {
            max = Math.max(leftValue + rightValue, max);
            return [1 + (foundOnRight ? rightValue : leftValue), true]
        } else {
            return [1 + Math.max(leftValue, rightValue), false]
        }
    }

    recursive(root)
    return max;
};