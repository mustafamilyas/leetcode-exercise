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

function maxProduct(root: TreeNode | null): number {
    const memo = new Map();
    let maxProduct = -Infinity;

    function traverse(current: TreeNode | null): number {
        if(current === null) return 0;

        const leftSum = traverse(current.left);
        const rightSum = traverse(current.right);
        const sum = current.val + leftSum + rightSum;
        memo.set(current, sum);
        return sum;
    }

    function traverseMapProduct(current: TreeNode | null) {
        if(current === null) return;

        const totalSum = memo.get(root);

        if(current.left) {    
            const leftSum = memo.get(current.left);
            const remainder = totalSum - leftSum;
            maxProduct = Math.max(remainder * leftSum, maxProduct)

            traverseMapProduct(current.left)
        }

        if(current.right) {
            const rightSum = memo.get(current.right);
            const remainder = totalSum - rightSum;
            maxProduct = Math.max(remainder * rightSum, maxProduct)

            traverseMapProduct(current.right)
        }
    }

    traverse(root);
    traverseMapProduct(root)

    return maxProduct % (10 ** 9 + 7);
};