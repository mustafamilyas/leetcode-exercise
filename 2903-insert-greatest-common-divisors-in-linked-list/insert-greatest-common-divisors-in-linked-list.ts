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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let cur = head;
    while(cur?.next !== null) {
        const gcdval = gcd(cur.val, cur.next.val);
        const next = cur.next;
        cur.next = new ListNode(gcdval, next);
        cur = next;
    }
    return head;
};

function gcd(a: number, b: number) {
    while(b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}