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

function doubleIt(head: ListNode | null): ListNode | null {
    function double(node: ListNode | null): number {
        if(node === null) return 0;
        const childDouble = double(node.next);
        const doubleNumber = 2 * node.val + childDouble;
        node.val = doubleNumber % 10;
        return Math.floor(doubleNumber / 10)
    }

    const val = double(head);
    if(val === 1) {
        head = new ListNode(1, head); 
    }
    return head;
};