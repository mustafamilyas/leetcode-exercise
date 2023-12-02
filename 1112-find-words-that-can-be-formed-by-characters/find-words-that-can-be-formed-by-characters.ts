const A_CHARCODE = 97;
function countCharacters(words: string[], chars: string): number {
  const charCounts = new Array(26).fill(0)
  let answer = 0;
  
  for(let i = 0; i < chars.length; i++) {
    charCounts[chars.charCodeAt(i) - A_CHARCODE]++
  }

  for(const word of words) {
    let isGood = true;
    const localCharCounts = new Array(26).fill(0);
    for(let i = 0; i < word.length; i++) {
      localCharCounts[word.charCodeAt(i) - A_CHARCODE]++
    }
    for(let i = 0; i <= 26; i++) {
      if(charCounts[i] < localCharCounts[i]) {
        isGood = false;
        break;
      }
    }
    if(isGood) answer += word.length;
  }
  return answer;  
};