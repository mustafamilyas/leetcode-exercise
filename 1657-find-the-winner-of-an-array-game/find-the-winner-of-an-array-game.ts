function getWinner(arr: number[], k: number): number {
    let curHighest = arr.shift();
    let counter = 0;

    while(counter < k && counter < arr.length) {
        if(curHighest > arr[0]) {
            arr.push(arr.shift())
            counter++
        } else {
            arr.push(curHighest);
            curHighest = arr.shift();
            counter = 1;
        }
    }

    return curHighest
};