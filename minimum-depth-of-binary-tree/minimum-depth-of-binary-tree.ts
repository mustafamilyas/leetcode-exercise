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

function minDepth(root: TreeNode | null): number {
    return iterative(root)
};

function iterative(root: TreeNode | null): number {
    if(root === null) return 0;

    let stack: [TreeNode, number][] = [[root, 1]]
    let min = Number.MAX_SAFE_INTEGER;

    while(stack.length) {
        const [node, depth] = stack.shift();
        if(node?.left) stack.push([node.left, depth + 1])
        if(node?.right) stack.push([node.right, depth + 1])
        if(!node?.left && !node?.right) {
            return depth;
        }
    }

    return min;
};