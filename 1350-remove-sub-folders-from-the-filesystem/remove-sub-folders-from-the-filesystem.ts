function removeSubfolders(folder: string[]): string[] {
    const trie = new Trie();
    for(let i = 0; i < folder.length; i++) {
        trie.insert(folder[i])
    }
    return trie.toArray()
};

class Node {
    marked: boolean;
    children: Record<string, Node>;
    constructor() {
        this.marked = false;
        this.children = {}
    }
}

class Trie {
    root: Node;
    constructor() {
        this.root = new Node();
    }

    insert(str: string) {
        const paths = str.split('/').slice(1)
        let current = this.root;
        let i = 0;
        for(;i < paths.length && current.children[paths[i]] && !current.marked; i++) {
            current = current.children[paths[i]]
        }
        if(i === paths.length || current.marked) {
            current.marked = true
            current.children = {}
            return;
        }
        for(; i < paths.length; i++) {
            const node = new Node();
            current.children[paths[i]] = node;
            current = node
        }
        current.marked = true
    }

    toArray() {
        return toPath(this.root)
    }
}

function toPath(trie: Node): string[] {
    const keys = Object.keys(trie.children)
    const result = []
    for(const k of keys) {
        const children = toPath(trie.children[k])
        if(children.length) {
            for(const c of children) {
                result.push(`/${k}${c}`)
            }
        } else {
            result.push(`/${k}`)
        }
    }
    return result;
}