class LinkedList {
    key: number;
    value: number;
    next: LinkedList | null;
    constructor(key: number, value: number, next: LinkedList | null = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}
class MyHashMap {
    memory: Array<LinkedList>
    k: number
    constructor() {
        this.k = 1000;
        this.memory = new Array(this.k).fill(null)
    }

    getArrayKey(key: number) {
        return key % this.k;
    }

    findNodeOnKey(key: number): LinkedList | null {
        const arrKey = this.getArrayKey(key);
        let cur = this.memory[arrKey]
        while(cur) {
            if(cur.key === key) return cur;
            cur = cur.next;
        }
        return null;
    }

    put(key: number, value: number): void {
        const node = this.findNodeOnKey(key);
        if(node) {
            node.value = value;
        } else {
            const arrKey = this.getArrayKey(key);
            const head = this.memory[arrKey]
            const newNode = new LinkedList(key, value, head);
            this.memory[arrKey] = newNode;
        }
    }

    get(key: number): number {
        const node = this.findNodeOnKey(key); 
        return node?.value ?? -1;
    }

    remove(key: number): void {
        const arrKey = this.getArrayKey(key);
        let cur = this.memory[arrKey];
        if(cur === null) return;
        if(cur?.key === key) {
            this.memory[arrKey] = cur.next;
        }
        let prev = cur;
        cur = cur.next;
        while(cur && cur.key !== key) {
            prev = cur;
            cur = cur.next;
        }
        if(cur) {
            prev.next = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */