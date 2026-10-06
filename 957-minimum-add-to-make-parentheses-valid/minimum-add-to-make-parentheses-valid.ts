function minAddToMakeValid(s: string): number {
    let valid = 0, invalid = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') valid++
        else {
            if(valid == 0) invalid++
            else valid--
        }
    }
    return valid + invalid;
};