function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a,b)=>a-b)
  const map: Record<number, number> = {};
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    map[arr[i]] = 1;

    for(let k = i; k >= 0; k--) {
      const complementKey = arr[i] / arr[k]
      if(map[complementKey]) {
        map[arr[i]] += map[complementKey] * map[arr[k]]
      }
    }

    sum += map[arr[i]]
  }

  return sum % (10 ** 9 + 7);
};