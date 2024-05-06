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

function removeNodes(head: ListNode | null): ListNode | null {
    if (head === null) return head;
    const stack = [head];
    let current = head.next;
    while(current) {
        while(stack.length && current.val > stack[stack.length - 1].val) {
            stack.pop();
        }
        if(stack.length) stack[stack.length - 1].next = current
        stack.push(current);
        current = current.next 
    }
    return stack[0]
};