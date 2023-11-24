function maxCoins(piles: number[]): number {
    piles.sort((a,b)=>b-a);
    const round = piles.length / 3;
    let myPile = 0, pileIndex = 1;
    for(let i = 0; i < round; i++) {
        myPile += piles[pileIndex]
        pileIndex += 2
    }
    return myPile;
};