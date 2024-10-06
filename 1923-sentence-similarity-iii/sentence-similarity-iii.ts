function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    const arr1 = sentence1.split(' ');
    const arr2 = sentence2.split(' ');

    if(arr1.length > arr2.length) return areSentencesSimilar(sentence2, sentence1);
    let s = 0, e1 = arr1.length - 1, e2 = arr2.length - 1;

    while(s < arr1.length && arr1[s] === arr2[s]) s++
    while(e1 >= 0 && arr1[e1] === arr2[e2]) e1--, e2--
    
    return e1 < s;
    
};