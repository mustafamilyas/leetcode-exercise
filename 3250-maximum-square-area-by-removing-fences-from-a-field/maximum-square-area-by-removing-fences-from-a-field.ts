const mod = 1e9 + 7;
function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
    if(!hFences.length || !vFences.length) return 0;
    hFences.sort((a, b)=>a-b);
    vFences.sort((a, b)=>a-b);

    const uniqueSpacesH = getUniqueSpace(hFences, m);
    const uniqueSpacesV = getUniqueSpace(vFences, n);
    let maxSide = -1;
    for(const h of uniqueSpacesH) {
        if(uniqueSpacesV.has(h)) {
            maxSide = Math.max(maxSide, h)
        }
    }
    if(maxSide < 0) return -1;
    return Number((BigInt(maxSide) * BigInt(maxSide)) % BigInt(mod));

    function getUniqueSpace(fences: number[], size: number): Set<number> {
        const uniques = new Set<number>();
        const nodes = [1, ...fences, size];

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                uniques.add(nodes[j] - nodes[i]);
            }
        }
        return uniques
    }
};