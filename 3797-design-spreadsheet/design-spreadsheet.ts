class Spreadsheet {
    cells: number[][];
    constructor(rows: number) {
        this.cells = new Array(26).fill(null).map(()=> new Array(rows).fill(0));
    }

    setCell(cell: string, value: number): void {
        const [x, y] = this._getPos(cell);
        this.cells[x][y] = value;
    }

    resetCell(cell: string): void {
        const [x, y] = this._getPos(cell);
        this.cells[x][y] = 0;
    }

    getValue(formula: string): number {
        const cellNames = [];
        let curCell = '';
        for(let i = 1; i <= formula.length; i++) {
            if(!formula[i] || formula[i] == '+') {
                cellNames.push(curCell);
                curCell = "";
            } else {
                curCell += formula[i];
            }
        }
        return cellNames.reduce((a, b)=> a + this._getCellValue(b), 0);
    }

    _getPos(cell: string): [number, number] {
        const x = cell.charCodeAt(0) - 65;
        const y = parseInt(cell.slice(1));
        return [x, y];
    }

    _getCellValue(cell: string): number {
        let tryParse = parseInt(cell);
        if(!isNaN(tryParse)) return tryParse;
        const [x, y] = this._getPos(cell);
        return this.cells?.[x]?.[y] ?? 0;
    }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */