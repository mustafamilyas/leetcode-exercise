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

function partition(head: ListNode | null, x: number): ListNode | null {
    let lessPointer = null, prev = null, cur = head, startSwapping = false;
    while(cur) {
        if(cur.val >= x) {
            startSwapping = true;
            prev = cur;
            cur = cur.next;
        } else if (!startSwapping) {
            lessPointer = cur;
            prev = cur;
            cur = cur.next;
        } else {
            const swapped = cur;
            if(prev) {
                prev.next = cur.next;
            } 
            cur = cur.next;
            if(lessPointer) {
                swapped.next = lessPointer.next;
                lessPointer.next = swapped;
                lessPointer = swapped;
            } else {
                lessPointer = swapped;
                if(lessPointer !== head) {
                    lessPointer.next = head;
                }
                head = lessPointer;
            }
        }
    }
    return head;
};