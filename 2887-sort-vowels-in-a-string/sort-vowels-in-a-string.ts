const vowelSet = new Set(['a', 'A', 'i', 'I', 'u', 'U', 'e', "E", 'o', 'O'])
function sortVowels(s: string): string {
    const str = s.split('');
    const vowels = str.filter((c)=>vowelSet.has(c));
    
    if(!vowels.length) return s;

    vowels.sort((a,b)=>a.charCodeAt(0) - b.charCodeAt(0))
    
    let result = '';
    let counter = 0;
    str.forEach((c, i)=> {
        if(vowelSet.has(c)) {
            result += vowels[counter++];
        } else {
            result += c
        }
    })
    return result;
};