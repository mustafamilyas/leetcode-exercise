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

class FindElements {
    distinctEls: Set<number>;
    constructor(root: TreeNode | null) {
        if(root == null) return;
        root.val = 0;
        this.distinctEls = new Set([0])
        const stack = [root];
        while(stack.length) {
            const cur = stack.pop();
            if(cur.left) {
                cur.left.val = cur.val * 2 + 1
                stack.push(cur.left)
                this.distinctEls.add(cur.left.val)
            }
            if(cur.right) {
                cur.right.val = cur.val * 2 + 2
                stack.push(cur.right)
                this.distinctEls.add(cur.right.val)
            }
        }
    }

    find(target: number): boolean {
        return this.distinctEls.has(target)
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */