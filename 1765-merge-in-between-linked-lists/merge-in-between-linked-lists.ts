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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    if(list1 == null) return list2;
    if(list2 == null) return list1;
    let counter = 1, cur = list1;
    let tail2 = list2;
    while(tail2.next) tail2 = tail2.next;
    while(cur) {
        const next = cur.next;
        if(counter === a) cur.next = list2
        if(counter === b + 1) tail2.next = next
        cur = next;
        counter++
    }
    return list1
};