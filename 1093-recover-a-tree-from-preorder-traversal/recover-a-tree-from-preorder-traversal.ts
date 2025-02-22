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

function recoverFromPreorder(traversal: string): TreeNode | null {
    let stack = [];
    let i = 0, depth = 0;
    while(i < traversal.length) {
        if(traversal[i] == '-') {
            i++;
            depth++
        } else {
            let valueStr = '';
            do {
                valueStr += traversal[i++];
            } while(i < traversal.length && traversal[i] !== '-');
            const value = parseInt(valueStr);
            if (depth < stack.length) stack = stack.slice(0, depth);
            const newNode = new TreeNode(value);
            const parentNode = stack[stack.length - 1];
            if (parentNode) {
                if(parentNode.left == null) parentNode.left = newNode
                else parentNode.right = newNode
            }
            stack.push(newNode)
            depth = 0
        }
    }

    return stack.length ? stack[0] : null;
};