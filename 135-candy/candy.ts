function candy(ratings: number[]): number {
  let result = 0;
  const candies = new Array(ratings.length).fill(1);
  for(let i = 1; i < ratings.length; i++) {
    if(ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  for(let i = ratings.length - 1; i >= 0; i--) {
    if(ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
    result += candies[i]
  }

  return result;
};