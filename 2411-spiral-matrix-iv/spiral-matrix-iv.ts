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

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const result = new Array(m).fill(-1).map(()=>new Array(n).fill(-1));
    const movements = [[0, 1],[1, 0],[0, -1],[-1, 0]];
    let row = 0, col = 0, cur = head, idx = 0;
    
    while(cur !== null) {
        result[row][col] = cur.val;
        let d = movements[idx]
        if(result?.[row + d[0]]?.[col + d[1]] == null || result?.[row + d[0]]?.[col + d[1]] !== -1) {
            idx = (idx + 1) % 4;
            d = movements[idx]
        }
        row += d[0]
        col += d[1]
        cur = cur.next
    }

    return result;
};
