function getWinner(arr: number[], k: number): number {
    let curHighest = 0;
    let counter = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[curHighest] > arr[i]) counter++
        else {
            curHighest = i;
            counter = 1;
        }

        if(counter === k) return arr[curHighest]
    }

    return arr[curHighest]
};