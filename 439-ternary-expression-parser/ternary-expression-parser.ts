interface ExpressionResult {
    value: string;
    nextStart: number;
}
function parseTernary(expression: string): string {
    function parse(startIndex: number): ExpressionResult {
        let curPointer = startIndex;
        const condition = expression[curPointer];
        let trueVal = '';
        let falseVal = '';
        // to next expression
        curPointer += 2;
        if(expression[curPointer + 1] === '?') {
            const {value, nextStart} = parse(curPointer);
            trueVal = value;
            curPointer = nextStart;
        } else {
            trueVal = expression[curPointer];
            // to next expression
            curPointer += 2;
        }

        if(expression[curPointer + 1] === '?') {
            const {value, nextStart} = parse(curPointer);
            falseVal = value;
            curPointer = nextStart;
        } else {
            falseVal = expression[curPointer];
            // to next expression
            curPointer += 2;
        }

        return {
            value: condition === 'F' ? falseVal : trueVal,
            nextStart: curPointer
        }
    }
    const {value} = parse(0); 
    return value;
};

// value = T | F | any number
// statement = value | ternary
// ternary = statement ? statement : statement