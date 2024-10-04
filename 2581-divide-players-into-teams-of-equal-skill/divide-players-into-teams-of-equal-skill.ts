function dividePlayers(skill: number[]): number {
    const team = skill.length / 2;
    const total = skill.reduce((a,b)=>a + b, 0);
    const remainder = total / team;
    if(total % team) return -1;
    const counter = new Array(remainder).fill(0);
    for(const s of skill) {
        if(s > remainder) return -1;
        counter[s % remainder]++
    }
    if(counter[0] % 2) return -1;
    let chemistry = 0, left = 1, right = remainder - 1;
    for(; left < right; left++, right--) {
        if(counter[left] !== counter[right]) return -1;
        chemistry += counter[left] * left * right;
    }
    if(left === right) {
        if(counter[left] % 2) return -1;
        chemistry += (counter[left] / 2) * left * left
    }
    return chemistry;
};