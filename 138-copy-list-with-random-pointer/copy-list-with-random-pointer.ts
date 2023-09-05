/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    const map = new Map();
    let cur = head;
    let newHead = null;
    let copy = null;
    while(cur) {
        const newNode = new Node(cur?.val);
        if(copy) {
            copy.next = newNode;
        } else {
            newHead = newNode;
        }
        copy = newNode;
        map.set(cur, newNode);
        cur = cur.next;
    }
    cur = head;
    copy = newHead;
    while(cur) {
        if(cur.random) {
            const random = map.get(cur.random);
            copy.random = random;
        }
        cur = cur.next;
        copy = copy.next;
    }
    return newHead;
};