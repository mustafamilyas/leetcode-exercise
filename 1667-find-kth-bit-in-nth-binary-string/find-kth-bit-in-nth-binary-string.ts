function findKthBit(n: number, k: number): string {
    function simulation(prev: string, remaining: number): string {
        if(remaining === 1) return prev;
        return simulation(`${prev}1${reverseAndInvert(prev)}`, remaining - 1);
    }
    return simulation('0', n)[k - 1]
};

function reverseAndInvert(str: string): string {
    let result = ''
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i] === '1' ? '0': '1'
    }
    return result;
}