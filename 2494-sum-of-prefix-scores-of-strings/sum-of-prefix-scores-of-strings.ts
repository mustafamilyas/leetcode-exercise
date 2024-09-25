function sumPrefixScores(words: string[]): number[] {
    const trie = new Trie();
    for(let i = 0; i < words.length; i++) {
        trie.insert(words[i])
    }
    return words.map((w)=>trie.scores(w))
};

class Node {
    prefixCount: number;
    children: Array<Node | null>;
    constructor() {
        this.prefixCount = 0;
        this.children = new Array(26).fill(null)
    }
}

class Trie {
    root: Node;
    constructor() {
        this.root = new Node();
    }

    insert(word: string) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            if(current.children[index] == null) current.children[index] = new Node();
            current = current.children[index]
            current.prefixCount++
        }
    }

    scores(word: string) {
        let current = this.root;
        let score = 0;
        for(let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            current = current.children[index]
            score += current.prefixCount
        }
        return score;
    }
}