class LinkedList {
    value: number;
    prev: LinkedList | null
    next: LinkedList | null
    constructor(value: number, prev: LinkedList | null, next: LinkedList | null) {
        this.value = value;
        this.prev = prev;
        if(prev) {
            prev.next = this;
        }
        this.next = next;
        if(next) {
            next.prev = this;
        }
    }
}

class MyLinkedList {
    head: LinkedList | null;
    tail: LinkedList | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    getNode(index: number): LinkedList | null {
        let counter = 0;
        let cur = this.head;
        while(cur && counter < index) {
            counter++;
            cur = cur.next;
        }
        return cur ?? null;
    }

    get(index: number): number {
        const node = this.getNode(index)
        return node?.value ?? -1;
    }

    addAtHead(val: number): void {
        const newNode = new LinkedList(val, null, this.head);
        this.head = newNode;
        if(this.tail === null) {
            this.tail = newNode;
        }
    }

    addAtTail(val: number): void {
        const newNode = new LinkedList(val, this.tail, null);
        this.tail = newNode;
        if(this.head === null) {
            this.head = newNode;
        }
    }

    addAtIndex(index: number, val: number): void {
        if(index === 0) {
            this.addAtHead(val)
            return;
        }
        const prevNode = this.getNode(index - 1);
        if(prevNode === null) return;
        if(prevNode.next === null) {
            this.addAtTail(val)
            return;
        }
        const curNode = prevNode.next;
        const newNode = new LinkedList(val, prevNode, curNode);
    }

    deleteAtIndex(index: number): void {
        const node = this.getNode(index);
        if(node) {
            const prev = node.prev;
            const next = node.next;
            if(prev) {
                prev.next = next;
            } else {
                this.head = next;
            }
            if(next) {
                next.prev = prev;
            } else {
                this.tail = prev;
            }
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */