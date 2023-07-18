class LinkedList {
    key: number;
    val: number;
    next: LinkedList | null;
    prev: LinkedList | null;
    constructor(
        key: number,
        val: number, 
        next: LinkedList | null, 
        prev: LinkedList | null
    ) {
        this.key = key;
        this.val = val;
        this.next = next;
        if(next !== null) {
            next.prev = this
        }
        this.prev = prev;
        if(prev !== null) {
            prev.next = this
        }
    }
}

class LRUCache {
    data: Map<number, LinkedList>;
    head: LinkedList | null;
    tail: LinkedList | null;
    capacity: number;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.data = new Map();
    }

    removeNode(a: LinkedList | null) {
        if(a === null) return;
        const prev = a.prev;
        const next = a.next;
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

    upPriority(key: number) {
        if(this.data.has(key)) {
            const curNode = this.data.get(key);
            const prev = curNode.prev;
            // this mean we have different tail and head
            if(prev) {
                this.removeNode(curNode)

                // move to front
                curNode.next = this.head;
                curNode.prev = null;
                this.head.prev = curNode;
                this.head = curNode;
            }
        }
    }

    get(key: number): number {
        if(this.data.has(key)) {
            this.upPriority(key);
            return this.data.get(key).val
        }

        return -1;
    }

    put(key: number, value: number): void {
        if(this.data.has(key)) {
            const curNode = this.data.get(key)
            this.upPriority(key);
            curNode.val = value;
        } else {
            // evict the last
            if(this.data.size >= this.capacity) {
                this.data.delete(this.tail.key)
                this.removeNode(this.tail);
            }

            // add the data
            const newNode = new LinkedList(key, value, this.head, null);
            this.head = newNode;
            this.data.set(key, newNode);
            if(this.tail === null) {
                this.tail = newNode;
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */