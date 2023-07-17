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
        if(l1 === null) {
            const nextValue = l2.val + carry;
            l2.val =  nextValue % 10;
            l2.next = addTwo(l1, l2.next, Math.floor(nextValue / 10)) 
            return l2;
        }

        if(l2 === null) {
            const nextValue = l1.val + carry;
            l1.val =  nextValue % 10;
            l1.next = addTwo(l1.next, l2, Math.floor(nextValue / 10)); 
            return l1;
        }

        const nextValue = l1.val + l2.val + carry;
        l1.val =  nextValue % 10;
        l1.next = addTwo(l1.next, l2.next, Math.floor(nextValue / 10))
        return l1;
    }
    const reversedL1 = reverseList(l1);
    const reversedL2 = reverseList(l2);
    return reverseList(addTwo(reversedL1, reversedL2, 0));
};