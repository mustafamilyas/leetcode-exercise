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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    const result: Array<ListNode | null> = new Array(k).fill(null);
    if(head === null) return result;
    let length = 0;
    let cur = head;
    while(cur) {
        cur = cur.next;
        length++
    }
    let nodePerK = Math.ceil(length / k);
    let nodeKIndex = 0;
    let counter = 0;
    cur = head;
    let prev = null;
    while(cur) {
        if(counter === 0) {
            if(prev) {
                prev.next = null;
            }
            result[nodeKIndex] = cur;
            nodePerK = Math.ceil((length) / k)
            k--;
            length -= nodePerK
            counter = nodePerK
            nodeKIndex++
        }
        counter--
        prev = cur;
        cur = cur.next;
    }

    return result;
};