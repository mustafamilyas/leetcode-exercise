class Node {
    children: Array<Node | null>
    isWord: boolean;

    constructor() {
        this.isWord = false;
        this.children = new Array(26).fill(null)
    }
}

class Trie {
    root: Node;
    constructor() {
        this.root = new Node();
    }

    insert(word: string): void {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            if(current.children[index] == null) {
                current.children[index] = new Node();
            }
            current = current.children[index];
        }
        current.isWord = true;
    }

    search(word: string): boolean {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            if(current.children[index] == null) return false;
            current = current.children[index];
        }
        return current.isWord;
    }

    startsWith(prefix: string): boolean {
        let current = this.root;
        for(let i = 0; i < prefix.length; i++) {
            const index = prefix.charCodeAt(i) - 97;
            if(current.children[index] == null) return false;
            current = current.children[index];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */