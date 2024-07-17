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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const deleteSet = new Set(to_delete);
    const result = []
    if(root == null) return result;
    let queue = [{node: root, parent: null}]
    while(queue.length) {
        const localQueue = []
        for(const {node, parent} of queue) {
            if(deleteSet.has(node.val)) {
                if(node.left) localQueue.push({node: node.left, parent: null})
                if(node.right) localQueue.push({node: node.right, parent: null})
                if(parent?.left == node) parent.left = null
                if(parent?.right == node) parent.right = null
                node.left = null
                node.right = null
            } else {
                if(!parent) result.push(node)
                if(node.left) localQueue.push({node: node.left, parent: node})
                if(node.right) localQueue.push({node: node.right, parent: node})
            }
        }
        queue = localQueue
    }
    return result;
};