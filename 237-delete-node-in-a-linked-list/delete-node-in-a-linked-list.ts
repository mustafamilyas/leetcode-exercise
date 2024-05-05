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
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
    if(node === null) return null
    let current = node;
    while(current.next) {
        const next = current.next;
        current.val = next.val;
        if(next.next === null) {
            current.next = null;
        } else {
            current = next;
        }
    }
};