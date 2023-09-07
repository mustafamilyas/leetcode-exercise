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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(left === right) return head;
    let leftNode = null, prev = null, cur = head;
    let counter = 1;
    while(cur && counter <= right) {
        if(counter < left) leftNode = cur;
        if(counter <= left) {
            prev = cur;
            cur = cur.next;
        } else {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        counter++
    }

    if(leftNode) {
        const endFlipped = leftNode.next;
        leftNode.next = prev;
        if(endFlipped) endFlipped.next = cur;
        return head;
    } else {
        head.next = cur;
        return prev;
    }
};