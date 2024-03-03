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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    function getNodeFromEnd(cur: ListNode | null, nth: number) {
        if(cur === null) return [cur, 0];
        const [node, i] = getNodeFromEnd(cur.next, nth);
        if(i === nth) return [node, i];
        return [cur, i + 1]
    }

    const [node, i] = getNodeFromEnd(head, n + 1);
    if(node === head && n === i) {
        return head.next
    }
    node.next = node.next?.next || null;
    return head
};