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

function mergeNodes(head: ListNode | null): ListNode | null {
    if(head === null) return head;
    const firstNode = head.next;
    let cur = firstNode;
    while(cur && cur.val !== 0) {
        cur = cur.next;
        firstNode.val += cur.val;
    }
    if(cur) firstNode.next = mergeNodes(cur)
    return firstNode;
    
};