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
    let max = head.val;
    const stack = [];
    let slow = head;
    let fast = head;
    while(slow) { 
        if(fast) {
            stack.push(slow.val)
            fast = fast.next.next;
        } else {
            max = Math.max(max, stack.pop() + slow.val)
        }
        slow = slow.next;
    };
    return max;
};