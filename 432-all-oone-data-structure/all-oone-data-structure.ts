class Node {
    key: string;
    value: number;
    prev: Node | null;
    next: Node | null;

    constructor(key: string, value: number, next: Node | null = null, prev: Node | null = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class AllOne {
    head: Node | null;
    tail: Node | null;
    map: Record<string, Node>;

    constructor() {
        this.head = null;
        this.tail = null;
        this.map = {}
    }

    swapNext(node: Node | null) {
        if(node?.next == null) return;

        const next = node.next;
        const prev = node.prev;
        if(prev) prev.next = next;
        next.prev = prev;
        node.next = next.next;
        if(next.next) next.next.prev = node;
        next.next = node;
        node.prev = next;
    }

    inc(key: string): void {
        if(this.map[key] == null) {
            const head = this.head;
            const newNode = new Node(key, 1, head);
            this.map[key] = newNode;
            this.head = newNode;
            if(head) head.prev = newNode;
            if(this.tail == null) this.tail = this.head;
        } else {
            let current = this.map[key]
            this.map[key].value++
            while(current.next && current.next.value < current.value) {
                if(current.prev == null) this.head = current.next;
                this.swapNext(current)
            }
            if(current.next == null) this.tail = current;
        }
    }

    dec(key: string): void {
        if(this.map[key] == null) return;
        let current = this.map[key];
        current.value--;
        if(current.value === 0) {
            const prev = current.prev;
            const next = current.next;
            if(prev == null) this.head = next
            else prev.next = next;
            if(next == null) this.tail = prev;
            else next.prev = prev;
            delete this.map[key]
        } else {
            while(current.prev && current.prev.value > current.value) {
                if(current.next == null) this.tail = current.prev
                this.swapNext(current.prev)
            }
            if(current.prev == null) this.head = current;
        }
    }

    print() {
        let current = this.head;
        console.log('================================')
        while(current) {
            this.printNode(current)
            current = current.next;
        }
        console.log('================================')
    }

    printNode(current: Node | null) {
        if(current == null) return console.log('empty')
        console.log(current.value, current.key, '|', current.prev?.key, '|', current.next?.key)
    }

    getMaxKey(): string {
        return this.tail?.key ?? ""
    }

    getMinKey(): string {
        return this.head?.key ?? ""
    }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */