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

function maxDepth(root: TreeNode | null): number {
    return iterative(root)
};

function recursive(root: TreeNode | null, depth: number = 0): number {
    if(root === null) return depth;

    const left = recursive(root.left, depth + 1)
    const right = recursive(root.right, depth + 1)
    return Math.max(left, right);
};

function iterative(root: TreeNode | null): number {
    if(root === null) return 0;

    let stack: [TreeNode, number][] = [[root, 1]]
    let max = 1;

    while(stack.length) {
        const [node, depth] = stack.shift();
        max = Math.max(depth, max)
        if(node?.left) stack.push([node.left, depth + 1])
        if(node?.right) stack.push([node.right, depth + 1])
    }

    return max;
};