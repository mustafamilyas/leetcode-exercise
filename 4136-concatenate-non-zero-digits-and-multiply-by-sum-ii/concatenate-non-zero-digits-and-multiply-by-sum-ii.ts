const MOD = 1000000007n;

function sumAndMultiply(s: string, queries: number[][]): number[] {
  const n = s.length;

  const digits: bigint[] = Array(n).fill(0n);
  const count: bigint[] = Array(n).fill(0n);
  const sums: bigint[] = Array(n).fill(0n);
  const pow10: bigint[] = Array(n + 1).fill(1n);

  for (let i = 1; i <= n; i++) {
    pow10[i] = (pow10[i - 1] * 10n) % MOD;
  }

  let digitValue = 0n;
  let digitCount = 0n;
  let digitSum = 0n;

  for (let i = 0; i < n; i++) {
    if (s[i] !== "0") {
      const d = BigInt(s[i]);
      digitValue = (digitValue * 10n + d) % MOD;
      digitSum = (digitSum + d) % MOD;
      digitCount++;
    }

    digits[i] = digitValue;
    count[i] = digitCount;
    sums[i] = digitSum;
  }

  const res: number[] = [];

  for (const [start, end] of queries) {
    const prevDigit = start === 0 ? 0n : digits[start - 1];
    const prevCount = start === 0 ? 0n : count[start - 1];
    const prevSum = start === 0 ? 0n : sums[start - 1];

    const endDigit = digits[end];
    const endCount = count[end];
    const endSum = sums[end];

    const diffCount = Number(endCount - prevCount);

    const x = (endDigit - prevDigit * pow10[diffCount] % MOD + MOD) % MOD;
    const sum = (endSum - prevSum + MOD) % MOD;

    res.push(Number((x * sum) % MOD));
  }

  return res;
}