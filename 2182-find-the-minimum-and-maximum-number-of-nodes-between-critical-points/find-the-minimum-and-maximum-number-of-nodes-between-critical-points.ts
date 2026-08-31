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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let min = Number.MAX_SAFE_INTEGER, firstI = null, prevI = null, curI = 1;
    let prev = head, cur = head?.next;
    
    while(cur) {
        if(cur.next) {
            if(
                (prev.val > cur.val && cur.next.val > cur.val) ||
                (prev.val < cur.val && cur.next.val < cur.val)
            ) {
                if(prevI) min = Math.min(min, curI - prevI)
                else firstI = curI;
                prevI = curI
            }
        }
        prev = cur;
        cur = cur.next;
        curI++;
    }
    if(min === Number.MAX_SAFE_INTEGER) return [-1, -1];
    return [min, prevI - firstI]
};