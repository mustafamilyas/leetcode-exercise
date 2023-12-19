function imageSmoother(img: number[][]): number[][] {
    return img.map((rowValue, row) => rowValue.map((_, col) => getAverageFromCenter(row, col)))

    function getAverageFromCenter(x: number, y: number) {
        let inGrid = 1, sum = img[x][y];
        if(img?.[x - 1]?.[y] !== undefined){
            inGrid++; sum += img[x - 1][y]
        }
        if(img?.[x - 1]?.[y - 1] !== undefined){
            inGrid++; sum += img[x - 1][y - 1]
        }
        if(img?.[x - 1]?.[y + 1] !== undefined){
            inGrid++; sum += img[x - 1][y + 1]
        }
        if(img?.[x]?.[y - 1] !== undefined){
            inGrid++; sum += img[x][y - 1]
        }
        if(img?.[x]?.[y + 1] !== undefined){
            inGrid++; sum += img[x][y + 1]
        }
        if(img?.[x + 1]?.[y - 1] !== undefined){
            inGrid++; sum += img[x + 1][y - 1]
        }
        if(img?.[x + 1]?.[y] !== undefined){
            inGrid++; sum += img[x + 1][y]
        }
        if(img?.[x + 1]?.[y + 1] !== undefined){
            inGrid++; sum += img[x + 1][y + 1]
        }

        return Math.floor(sum / inGrid);
    }
};