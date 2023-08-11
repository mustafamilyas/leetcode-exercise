function change(amount: number, coins: number[]): number {
    const cols = amount + 1; 
    const rows = coins.length + 1;  
    const cache: number[][] = [];
    
    for (let row = 0; row < rows; row++) {
        cache.push(new Array(cols).fill(0));
        cache[row][0] = 1;
    }
    
    for (let col = 1; col < cols; col++) {
        for (let row = rows - 2; row >= 0; row--) {
            const target = col;
            const remainder = target - coins[row];
            
            if (remainder > 0) {
                cache[row][col] += cache[row][remainder];
                cache[row][col] += cache[row + 1][col];              
            } else if (remainder < 0) {
                cache[row][col] += cache[row + 1][col];                
            } else if (remainder == 0) {
                cache[row][col] += 1; 
                cache[row][col] += cache[row + 1][col];
            }
            
        }
    }
    
    return cache[0][cols - 1];
};