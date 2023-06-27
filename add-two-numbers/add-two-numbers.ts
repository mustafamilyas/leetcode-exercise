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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null && l2 === null) return null;
    if(l1 === null && l2?.val < 10) return l2;
    if(l2 === null && l1?.val < 10) return l1;
    if(l1 === null) {
        const temp = l1;
        l1 = l2;
        l2 = temp;
    }
    const newValue = (l1?.val ?? 0) + (l2?.val ?? 0);
    l1.val = newValue % 10;
    const carry = Math.floor(newValue / 10)
    if(carry) {
        if(l1.next) l1.next.val += carry
        else l1.next = new ListNode(1)
    }
    l1.next = addTwoNumbers(l1?.next ?? null, l2?.next ?? null)
    return l1
};