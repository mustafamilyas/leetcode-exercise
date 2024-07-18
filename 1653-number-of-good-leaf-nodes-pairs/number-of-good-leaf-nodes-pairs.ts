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

function countPairs(root: TreeNode | null, distance: number): number {
    let result = 0
    function recurse(node: TreeNode| null): [number, number][] {
        if(node == null) return []
        if(node.left === null && node.right === null) return [[0, 1]]
        if(node.left === null || node.right === null) {
            const child = node.left ? recurse(node.left) : recurse(node.right);
            return filterDistance(child)
        }
        const left = filterDistance(recurse(node.left))
        const right = filterDistance(recurse(node.right))
        for(const [ld, lc] of left) {
            for(const [rd, rc] of right) {
                if(ld + rd <= distance) result += rc * lc
            }
        }
        return merge(left, right)
    }
    recurse(root)
    return result; 
    // ==========================
    function filterDistance(counter: [number, number][]) {
        const next = []
        for(const [d, c] of counter) {
            if(d < distance) next.push([d + 1, c])
        }
        return next;
    }

    function merge(counter1: [number, number][], counter2: [number, number][]): [number, number][] {
        const map = new Map<number, number>(counter1);
        for(const [d, c] of counter2) {
            map.set(d, (map.get(d) ?? 0) + c)
        }
        return Array.from(map)
    }
};