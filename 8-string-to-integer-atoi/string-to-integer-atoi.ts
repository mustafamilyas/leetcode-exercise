enum State {
    READ_SIGN,
    READ_NUM,
    DEAD,
    FINISH
}

function myAtoi(s: string): number {
    let state: State = State.READ_SIGN;
    let digits = 0;
    let sign = 0;
    
    for(let i = 0; i < s.length && state !== State.FINISH;) {
        switch(state as State) {
            case State.READ_SIGN: {
                if(s[i] === '+' || s[i] === '-') {
                    if(s[i] === '+') sign = 1
                    else sign = -1;
                    i++
                    state = State.READ_NUM;
                } else if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
                    sign = 1
                    state = State.READ_NUM;
                } else if(s[i] !== ' ') {
                    state = State.DEAD;  
                } else {
                    i++
                }
                break;
            }
            case State.READ_NUM: {
                if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
                    digits = digits * 10 + parseInt(s.charAt(i))
                    i++;
                } else {
                    state = State.FINISH;        
                }
                break;
            }
            case State.DEAD: {
                return 0;
            }
            case State.FINISH: {
                break;
            }
        }
    }
    
    return Math.max(Math.min(sign * digits, Math.pow(2, 31) - 1), -1 * Math.pow(2, 31));
};