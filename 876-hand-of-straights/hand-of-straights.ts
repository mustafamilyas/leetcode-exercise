function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(hand.length % groupSize) return false;
    const count = new Map<number, number>();
    for(const card of hand) {
        count.set(card, (count.get(card) ?? 0) + 1)
    }
    const keys = Array.from(count.keys());
    keys.sort((a, b)=> b - a);
    while(keys.length) {
        const top = keys.length - 1
        const topValue = keys[top];
        for(let i = 0; i < groupSize; i++) {
            if(i > 0 && keys[top - i] !== topValue + i) return false;
            const currentCount = count.get(topValue + i);
            if(!currentCount) return false;
            count.set(topValue + i, currentCount - 1)
            if(currentCount - 1 === 0) keys.pop();
        }
    }
    return true;
};