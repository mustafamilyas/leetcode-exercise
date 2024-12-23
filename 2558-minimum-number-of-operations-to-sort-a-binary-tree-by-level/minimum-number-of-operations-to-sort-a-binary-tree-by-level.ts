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

function minimumOperations(root: TreeNode | null): number {
    if(root === null) return 0;
    let queue = [root];
    let changes = 0;
    while(queue.length) {
        const next = [];
        const values = [];
        for(const node of queue) {
            values.push(node.val);
            if(node.left) next.push(node.left)
            if(node.right) next.push(node.right)
        }
        changes += calculateArrayMinSwap(values)
        queue = next;
    }
    return changes;

    function calculateArrayMinSwap(nums: number[]): number {
        if(nums.length < 2) return 0;
        const sorted = [...nums]
        sorted.sort((a, b)=>a - b);
        const map = {};
        const visited = Array.from({length: nums.length}).fill(false)
        for(let i = 0; i < sorted.length; i++) {
            map[sorted[i]] = i
        }
        let diff = 0;
        for(let i = 0; i < nums.length; i++) {
            if(visited[i]) continue;
            let cur = i;
            while(!visited[cur]) {
                visited[cur] = true;
                cur = map[nums[cur]]
                diff++
            }
            diff--
        }
        return diff;
    }
};