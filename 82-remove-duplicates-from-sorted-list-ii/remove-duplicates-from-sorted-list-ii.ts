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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head == null) return head;
    let nextHead = head, prev = null, cur = head;
    while(cur) {
        const prevBeforeChanges = prev;
        const watchedNode = cur;
        let counter = 0;
        while(cur && cur.val === watchedNode.val) {
            prev = cur;
            cur = cur.next;
            counter++;
        }
        if(counter > 1) {
            if(prevBeforeChanges === null) {
                nextHead = cur;
                prev = null;
            } else {
                prevBeforeChanges.next = cur;
                prev = prevBeforeChanges
            }
        }
    }
    return nextHead;
};