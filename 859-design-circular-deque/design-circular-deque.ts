class Node {
    value: number;
    next: Node | null;
    prev: Node | null;
    constructor(value: number, next: Node | null = null, prev: Node | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class MyCircularDeque {
    size: number;
    length: number;
    front: Node | null;
    back: Node | null;
    constructor(k: number) {
        this.size = k;
        this.initData()
    }

    initData() {
        this.length = 0;
        this.front = null;
        this.back = null;
    }

    insertEmpty(value: number): boolean {
        if(this.size === this.length) return false;
        if(this.front !== null) return false;
        this.front = new Node(value);
        this.back = this.front;
        this.length++
        return true;
    }

    insertFront(value: number): boolean {
        if(this.size === this.length) return false;
        if(this.front == null) return this.insertEmpty(value);
        const next = this.front;
        this.front = new Node(value, next);
        next.prev = this.front;
        this.length++
        return true;
    }

    insertLast(value: number): boolean {
        if(this.size === this.length) return false;
        if(this.front == null) return this.insertEmpty(value);
        const prev = this.back;
        this.back = new Node(value, null, prev);
        prev.next = this.back;
        this.length++
        return true;
    }

    deleteFront(): boolean {
        if(this.front == null) return false;
        if(this.front === this.back) {
            this.initData()
            return true;
        }
        this.front = this.front.next;
        this.front.prev = null;
        this.length--
        return true;
    }

    deleteLast(): boolean {
        if(this.back == null) return false;
        if(this.front === this.back) {
            this.initData()
            return true;
        }
        this.back = this.back.prev;
        this.back.next = null;
        this.length--
        return true;
    }

    getFront(): number {
        return this.front?.value ?? -1
    }

    getRear(): number {
        return this.back?.value ?? -1
    }

    isEmpty(): boolean {
        return this.length === 0
    }

    isFull(): boolean {
        return this.length === this.size
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */