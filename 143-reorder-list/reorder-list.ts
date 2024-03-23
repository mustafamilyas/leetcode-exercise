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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if(head === null || head.next === null) return;
    let slow = head, fast = head, prev = null;
    
    while(fast?.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next?.next;
    }
    
    if(prev) prev.next = null; // this should be the end of the list
    
    let mid = reverse(slow, null), front = head;

    while(front !== null) {
        if(front.next === null) {
            front.next = mid;
            break;
        }
        const frontNext = front.next;
        const midNext = mid.next;
        front.next = mid;
        mid.next = frontNext;
        front = frontNext;
        mid = midNext;
    }
    
};

function reverse(node: ListNode | null, prevNode: ListNode | null): ListNode | null {
    if(node === null) return prevNode;
    
    const temp = node.next;
    node.next = prevNode;
    
    return reverse(temp, node)
}