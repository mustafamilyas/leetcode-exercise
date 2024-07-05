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
    let minDistance = Number.MAX_SAFE_INTEGER;
    while(cur) {
        if(cur.next && (
            (prev.val > cur.val && cur.next.val > cur.val) ||
            (prev.val < cur.val && cur.next.val < cur.val)
        )) {
            distance.push(curIdx)
            if(distance.length >= 2) minDistance =  Math.min(minDistance, distance[distance.length - 1] - distance[distance.length - 2])
        }
        prev = cur
        cur = cur.next;
        curIdx++
    }
    const dl = distance.length;
    if(dl < 2) return [-1, -1];
    const maxDistance = distance[dl - 1] - distance[0];
    return [minDistance, maxDistance]
};