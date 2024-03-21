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
 // 1 2 3 4
 // h c n
 // nh
 // 2 1 3 4
 // nh h c n
 // c.next = nh
 // h.next = n
 // nh = c
 // c = n
 // 3 2 1 4

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null) return head;
    let prev = null, cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};