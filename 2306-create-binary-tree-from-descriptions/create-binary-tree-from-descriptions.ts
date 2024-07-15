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
    const map = new Map<number, TreeNode>();
    const childSet = new Set<number>();
    for(const [parent, child, isLeft] of descriptions) {
        let parentNode = getOrCreate(parent)
        let childNode = getOrCreate(child)
        childSet.add(child)
        if(isLeft) parentNode.left = childNode
        else parentNode.right = childNode
    }
    for(const node of map.values()) {
        if(!childSet.has(node.val)) return node 
    }
    return null;
    // ======================= UTILS =======================
    function getOrCreate(value: number) {
        if(map.has(value)) return map.get(value)
        const node = new TreeNode(value)
        map.set(value, node)
        return node;
    }
};