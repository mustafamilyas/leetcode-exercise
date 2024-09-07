/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    return recurse(head, root);
    function recurse(curListNode: ListNode | null, curTreeNode: TreeNode | null):boolean {
        if(curListNode == null) return true;
        if(curTreeNode == null) return false;
        if(check(curListNode, curTreeNode)) return true;
        return recurse(curListNode, curTreeNode.left) || recurse(curListNode, curTreeNode.right)
    }
    function check(curListNode: ListNode | null, curTreeNode: TreeNode | null):boolean {
        if(curListNode == null) return true;
        if(curTreeNode == null) return false;
        return curListNode.val === curTreeNode.val && (check(curListNode.next, curTreeNode.left) || check(curListNode.next, curTreeNode.right))
    }
};