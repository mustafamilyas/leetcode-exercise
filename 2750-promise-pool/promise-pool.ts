type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
  let counter = 0;
  async function fireNext() {
    if (counter >= functions.length) return;
    const fn = functions[counter];
    counter++
    await fn();
    await fireNext();
  }
  const nPromises = Array(n).fill(null).map(fireNext);
  await Promise.all(nPromises);
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */