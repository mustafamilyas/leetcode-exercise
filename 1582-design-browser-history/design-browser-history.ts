class BrowserHistory {
    backHistory: string[];
    forwardHistory: string[];
    current: string
    constructor(homepage: string) {
        this.current = homepage;
        this.backHistory = [];
        this.forwardHistory = [];
    }

    visit(url: string): void {
        // clear forwardHistory
        this.forwardHistory = []
        this.backHistory.push(this.current)
        this.current = url;
    }

    back(steps: number): string {
        for(let i = 0; i < steps && this.backHistory.length; i++) {
            this.forwardHistory.push(this.current)
            this.current = this.backHistory.pop();
        }
        return this.current; 
    }

    forward(steps: number): string {
        for(let i = 0; i < steps && this.forwardHistory.length; i++) {
            this.backHistory.push(this.current)
            this.current = this.forwardHistory.pop();
        }
        return this.current;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */