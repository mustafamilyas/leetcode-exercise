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
        if(this.next !== null) {
            const _next = this.next;
            _next.prev = this;
        }
        this.prev = prev;
        if(this.prev !== null) {
            const _prev = this.prev;
            _prev.next = this;
        }
    }
}

class LRUCache {
    capacity: number;
    map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        const value = this.map.get(key);

        if (value === undefined) return -1;
            
        // Small hack to re-order keys: we remove the requested key and place it at the end
        this.map.delete(key);
        this.map.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        // remove last element to avoid overflow, only if it does not have 
        // the inserted key is a new key
        if (this.map.size >= this.capacity && !this.map.has(key)) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        
        // Small hack to re-order keys: we remove the requested key and place it at the end
        this.map.delete(key);
        this.map.set(key, value);
    }
    // data: Map<number, LinkedList>;
    // head: LinkedList | null;
    // tail: LinkedList | null;
    // capacity: number;
    // constructor(capacity: number) {
    //     this.capacity = capacity;
    //     this.head = null;
    //     this.tail = null;
    //     this.data = new Map();
    // }

    // removeNode(a: LinkedList | null) {
    //     if(a === null) return;
    //     const prev = a.prev;
    //     const next = a.next;
    //     if(prev) {
    //         prev.next = next;
    //     } else {
    //         this.head = next;
    //     }
    //     if(next) {
    //         next.prev = prev;
    //     } else {
    //         this.tail = prev;
    //     }
    // }

    // upPriority(key: number) {
    //     if(this.data.has(key)) {
    //         const curNode = this.data.get(key);
    //         const prev = curNode.prev;
    //         // this mean we have different tail and head
    //         if(prev) {
    //             this.removeNode(curNode)

    //             // move to front
    //             curNode.next = this.head;
    //             this.head.prev = curNode;
    //             this.head = curNode;
    //         }
    //     }
    // }

    // get(key: number): number {
    //     console.log('get', key)
    //     if(this.data.has(key)) {
    //         this.upPriority(key);
    //         return this.data.get(key).val
    //     }

    //     return -1;
    // }

    // put(key: number, value: number): void {
    //     console.log('put', key, value)
    //     if(this.data[key] !== undefined) {
    //         this.upPriority(key);
    //         this.data[key].val = value;
    //     } else {
    //         // evict the last
    //         if(this.data.size >= this.capacity) {
    //             this.data.delete(this.tail.key)
    //             this.removeNode(this.tail);
    //         }

    //         // add the data
    //         const newNode = new LinkedList(key, value, this.head, null);
    //         this.head = newNode;
    //         this.data.set(key, newNode);
    //         console.log('replaced', key, this.data.get(key).val)
    //         if(this.tail === null) {
    //             this.tail = newNode;
    //         }
    //     }
    // }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */