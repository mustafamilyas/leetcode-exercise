function repairCars(ranks: number[], cars: number): number {
    let l = 1, r = Math.max(...ranks) * cars * cars
    while(l < r) {
        const mid = Math.floor((l + r) / 2);
        if(isAllRepaired(mid)) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return l

    function isAllRepaired(times: number): boolean {
        let carCount = 0;
        for(const mechanic of ranks) {
            carCount += Math.floor(Math.sqrt(times / mechanic))
        }
        return carCount >= cars
    }  
};

// t = r * c * c
// c * c = t * r