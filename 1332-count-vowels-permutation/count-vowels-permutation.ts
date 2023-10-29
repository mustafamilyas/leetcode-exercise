const MOD = (1e9 + 7);
function countVowelPermutation(n: number): number {
    let a = 1, e = 1, i = 1, o = 1, u = 1;

    for(let k = 2; k <= n; k++) {
        const next_a = e;
        const next_e = (a + i) % MOD;
        const next_i = (a + e + o + u) % MOD;
        const next_o = (i + u) % MOD;
        const next_u = a;

        a = next_a;
        e = next_e;
        i = next_i;
        o = next_o;
        u = next_u;
    }

    return (a + e + i + o + u) % MOD;
};