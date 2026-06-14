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

function pairSum(head: ListNode | null): number {
    if(head === null) return 0;
    let max = 0;
    const stack = [];
    let slow = head, fast = head;
    while(fast) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next?.next;
    }
    while(slow) {
        max = Math.max(max, slow.val + stack.pop());
        slow = slow.next;
    }
    return max;
};