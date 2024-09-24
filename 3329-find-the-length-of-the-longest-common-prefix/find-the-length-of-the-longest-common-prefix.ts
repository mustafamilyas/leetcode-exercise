function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const trie = new Trie();
    for(const n of arr1) {
        trie.insert(n)
    }
    let max = 0;
    for(const n of arr2) {
        max = Math.max(max, trie.longestPrefix(n))
    }
    return max;
};

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