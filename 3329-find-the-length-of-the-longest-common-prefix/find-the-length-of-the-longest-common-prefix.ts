function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixSet = new Set();
    let max = 0;
    for(let n of arr1) {
        while(n > 0) {
            prefixSet.add(n);
            n = Math.trunc(n / 10)
        }
    }
    for(let n of arr2) {
        while(n > 0 && !prefixSet.has(n)) {
            n = Math.trunc(n / 10);
        }
        if(prefixSet.has(n)) {
            max = Math.max(max, countDigit(n))
        }
    }

    return max;
};

function countDigit(n: number): number {
    let digit = 1;
    while(n > 9) {
        n = Math.trunc(n / 10);
        digit++
    }
    return digit;
}

class Node {
    isWord: boolean;
    children: Array<Node | null>
    constructor() {
        this.isWord = false;
        this.children = new Array(10).fill(null)
    }
}

class Trie {
    root: Node;
    constructor() {
        this.root = new Node();
    }
    insert(num: number) {
        const split = num.toString().split('').map(Number);
        let current = this.root;
        for(let i = 0; i < split.length; i++) {
            if(current.children[split[i]] == null) current.children[split[i]] = new Node();
            current = current.children[split[i]]
        }
        current.isWord = true;
    }
    longestPrefix(num: number) {
        const split = num.toString().split('').map(Number);
        let current = this.root;
        let i = 0
        for(; i < split.length && current.children[split[i]] !== null; i++) {
            current = current.children[split[i]]
        }
        return i;
    }
}