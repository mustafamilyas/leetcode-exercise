function numWaterBottles(numBottles: number, numExchange: number): number {
    let drink = 0, empty = 0;
    while(numBottles > 0) {
        drink += numBottles;
        empty += numBottles;
        numBottles = Math.trunc(empty / numExchange)
        empty %= numExchange
    }
    return drink;
};