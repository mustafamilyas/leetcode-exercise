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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const nodeParent: Record<number, TreeNode | null> = {};
    const nodes: Record<number, TreeNode> = {};
    for(const [parent, child, isLeft] of descriptions) {
        if(!nodes[parent]) {
            nodes[parent] = new TreeNode(parent)
            nodeParent[parent] = null
        }
        if(!nodes[child]) {
            nodes[child] = new TreeNode(child);
        }
        nodeParent[child] = nodes[parent]
        if(isLeft) {
            nodes[parent].left = nodes[child]
        } else {
            nodes[parent].right = nodes[child]
        }
    }
    for (const [key, value] of Object.entries(nodeParent)) {
        if(value == null) return nodes[key]
    }
    return null
};