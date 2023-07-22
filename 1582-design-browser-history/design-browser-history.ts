class BrowserHistory {
    history: string[];
    current: number
    constructor(homepage: string) {
        this.history = [homepage]
        this.current = 0;
    }

    visit(url: string): void {
        this.current++;
        this.history = this.history.slice(0, this.current)
        this.history.push(url)
    }

    back(steps: number): string {
        this.current -= steps
        if(this.current < 0) {
            this.current = 0;
        }
        return this.history[this.current]
    }

    forward(steps: number): string {
        this.current += steps;
        if(this.current >= this.history.length) {
            this.current = this.history.length - 1;
        }
        return this.history[this.current]
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */