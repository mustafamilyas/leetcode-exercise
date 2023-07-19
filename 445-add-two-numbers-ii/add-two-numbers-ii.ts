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
    function reverseList(head: ListNode | null) {
        if(head === null) return head;
        let _head = head;
        let _next = head.next;
        while(_next) {
            const n = _next.next;
            head.next = n;
            _next.next = _head;
            _head = _next;
            _next = n;
        }
        return _head;
    }
    function addTwo(l1: ListNode | null, l2: ListNode | null, carry: number): ListNode | null {
        if(l1 === null && l2 === null) {
            if(carry) return new ListNode(1)
            return null;
        }
        const nextValue = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        const usedNode = l1 || l2;
        usedNode.val =  nextValue % 10;
        usedNode.next = addTwo(l1?.next || null, l2?.next || null, Math.floor(nextValue / 10))  
        return usedNode;
    }
    const reversedL1 = reverseList(l1);
    const reversedL2 = reverseList(l2);
    return reverseList(addTwo(reversedL1, reversedL2, 0));
};