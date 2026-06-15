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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head == null || head.next == null) return null;
    let slow = head, fast = head.next;
    while(fast?.next?.next) {
        slow = slow.next;
        fast = fast.next?.next;
    }
    slow.next = slow.next?.next;
    return head;
};