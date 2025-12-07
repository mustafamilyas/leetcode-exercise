function countOdds(low: number, high: number): number {
    const inclusive_odd = low % 2 || high % 2;
    return Math.trunc((high - low) / 2) + inclusive_odd;
};

/*
even even 10 20 = 5
odd even 11 20 = 4.5 + 1 = 5
even odd 10 21 = 5.5 + 1 = 6 
odd odd 11 21 = 5 + 1 = 6

*/