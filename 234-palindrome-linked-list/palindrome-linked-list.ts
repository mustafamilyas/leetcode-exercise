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

function isPalindrome(head: ListNode | null): boolean {
    if(head == null) return false;
    if(head.next == null) return true;
    let slow = head, fast = head.next, read = false, acc = '';
    while(slow) {
        if(read) {
            if(slow.val.toString() !== acc[acc.length - 1]) return false;   
            acc = acc.slice(0, acc.length - 1)
        } else acc += slow.val
        slow = slow.next
        if(fast == null) {
        } else if(fast?.next == null) {
            read = true
            fast = null
        } else if(fast?.next?.next == null) {
            read = true;
            slow = slow.next;
            fast = null
        } else fast = fast.next.next
    }
    return true;
};