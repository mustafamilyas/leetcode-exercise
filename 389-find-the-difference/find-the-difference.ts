function findTheDifference(s: string, t: string): string {
    let count = 0;
    for(let i = 0; i < t.length; i++) {
        count += t.charCodeAt(i) - (s.charCodeAt(i) || 0)
    }
    return String.fromCharCode(count)
};