function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const trie = new Trie();
    arr1.forEach((a)=>trie.insert(a))
    return arr2.reduce((a, b)=>Math.max(a, trie.longestPrefix(b)), 0)
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