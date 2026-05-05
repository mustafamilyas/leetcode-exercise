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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head == null) return head;
    let length = 1;
    let cur = head;
    while(cur.next != null) {
        length++
        cur = cur.next;
    }
    const tail = cur;
    const resolvedK = k % length;
    const reversedK = (length - resolvedK) % length;
    if(reversedK == 0) return head;
    length = 1;
    cur = head;
    while(length < reversedK) {
        length++
        cur = cur.next;
    }
    const newHead = cur.next;
    tail.next = head;
    cur.next = null;
    return newHead;
};