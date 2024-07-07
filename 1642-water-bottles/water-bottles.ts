function numWaterBottles(numBottles: number, numExchange: number): number {
    return numBottles + Math.trunc((numBottles - 1) / (numExchange - 1))
};