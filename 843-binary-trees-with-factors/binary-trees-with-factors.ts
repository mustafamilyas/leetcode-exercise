function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a,b)=>a-b)
  const map = new Map<number, number>();
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    let curCount = 1;

    for(let k = i; k >= 0; k--) {
      const complementKey = arr[i] / arr[k]
      if(map.has(complementKey)) {
        curCount += map.get(complementKey) * map.get(arr[k])
      }
    }
    map.set(arr[i], curCount)
    sum += curCount
  }

  return sum % (10 ** 9 + 7);
};