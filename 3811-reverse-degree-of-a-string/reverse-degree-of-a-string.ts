function reverseDegree(s: string): number {
    let product = 0;
    for(let i = 0; i < s.length; i++) {
        product += (i + 1) * (26 - s.charCodeAt(i) + 97);
    }
    return product;
};