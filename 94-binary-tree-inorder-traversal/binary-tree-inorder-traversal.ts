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

function inorderTraversal(root: TreeNode | null): number[] {
    if(root === null) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

function iterativeInorderTraversal (root: TreeNode | null): number[] {
    const stack = [];
    const res = [];
    let currentNode = root;
    
    while(stack.length || currentNode !== null) {
        if (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left
        } else {
            const prevNode = stack.pop();
            res.push(prevNode.val);
            currentNode = prevNode.right;
        }
    }
    
    return res;
};

function iterativeInorderTraversal2 (root: TreeNode | null): number[] {
    const stack = [];
    const res = [];
    let currentNode = root;
    
    while(stack.length || currentNode) {
        while(currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        
        currentNode = stack.pop();
        res.push(currentNode.val);
        currentNode = currentNode.right;
    }
    
    return res;
};