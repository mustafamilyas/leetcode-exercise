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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if(head === null) return [-1, -1];
    let cur = head.next, prev = head, curIdx = 1;
    const distance = [];
    while(cur) {
        if(cur.next && (
            (prev.val > cur.val && cur.next.val > cur.val) ||
            (prev.val < cur.val && cur.next.val < cur.val)
        )) {
            distance.push(curIdx)

        }
        prev = cur
        cur = cur.next;
        curIdx++
    }
    const dl = distance.length;
    if(dl < 2) return [-1, -1];
    const maxDistance = distance[dl - 1] - distance[0];
    let minDistance = maxDistance;
    for(let i = 1; i < dl; i++) {
        minDistance = Math.min(minDistance, distance[i] - distance[i - 1])
    }
    return [minDistance, maxDistance]
};