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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set = new Set(nums);
    let nextHead = head, prev = null, cur = head;
    while (cur !== null) {
        if (set.has(cur.val)) {
            if(prev === null) nextHead = cur.next;
            else prev.next = cur.next;
        } else prev = cur;
        cur = cur.next;
    }
    return nextHead;
};