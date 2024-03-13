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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    if(head === null) return head;
    const map = new Map<number, ListNode>();
    let _head = head, acc = 0, cur = head;
    while(cur) {
        acc += cur.val;
        if(map.has(acc)) {
            let beforeConsecutive = map.get(acc);
            let prevAcc = acc
            let toRemove = beforeConsecutive.next;
            while(toRemove && toRemove.next !== cur.next) {
                prevAcc += toRemove.val
                map.delete(prevAcc)
                toRemove = toRemove.next;
            }
            beforeConsecutive.next = cur.next;
        } else if(acc === 0){
            _head = cur.next;
            map.clear();
        } else {
            map.set(acc, cur);
        }
        cur = cur.next;
    }
    return _head;
};