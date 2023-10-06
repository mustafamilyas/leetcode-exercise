function isPalindrome(s: string): boolean {
    const _s = s.trim().toLowerCase();
    let left = 0, right = _s.length - 1;
    while(left <= right) {
        if(isAlphanumeric(_s[left]) && isAlphanumeric(_s[right])) {
            if(_s[left] !== _s[right]) return false;
            right--
            left++
        } else {
            if(isAlphanumeric(_s[left])) {
                right--
            } else if (isAlphanumeric(_s[right])) {
                left++
            } else {
                right--
                left++
            }
        }
    }
    return left > right;
};

function isAlphanumeric(str: string) {
  const code = str.charCodeAt(0)
  if (
    (code > 47 && code < 58) || // numeric (0-9)
    (code > 64 && code < 91) || // upper alpha (A-Z)
    (code > 96 && code < 123)
  ) {
    return true
  }
  return false
}