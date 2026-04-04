function decodeCiphertext(encodedText: string, rows: number): string {
    const n = encodedText.length;
    const cols = n / rows;
    let res = '', row = 0, col = 0;
    for(let i = 0; i < n; i++) {
        res += encodedText[row * cols + col] ?? '';
        row++;
        col++;
        if(row === rows) {
            col -= (rows - 1);
            row = 0;
        }
    }
    return res.trimEnd();
};