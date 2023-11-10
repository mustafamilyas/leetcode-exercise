function restoreArray(adjacentPairs: number[][]): number[] {
  const map: Record<number, number[]> = {};

  for(const [from, to] of adjacentPairs) {
      if(map[from]) map[from].push(to)
      else map[from] = [to]

      if(map[to]) map[to].push(from)
      else map[to] = [from]
  }

  const firstNumKey = Object.keys(map).find((numKey)=>map[numKey].length === 1);
  let nextKey = Number(firstNumKey);
  const res = []

  do {
      res.push(nextKey);
      nextKey = map[nextKey].find((n) => n !== res[res.length - 2])
  } while (nextKey !== undefined)

  return res;
};