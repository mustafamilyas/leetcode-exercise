interface ExpressionResult {
    value: string;
    nextStart: number;
}
function parseTernary(expression: string): string {
    function parse(startIndex: number): ExpressionResult {
        let curPointer = startIndex;

        function goToNextExpression() {
            curPointer += 2;
        }

        function getNextExpressionValue() {
            let curValue = '';
            if(expression[curPointer + 1] === '?') {
                const {value, nextStart} = parse(curPointer);
                curValue = value;
                curPointer = nextStart;
            } else {
                curValue = expression[curPointer];
                goToNextExpression();
            }
            return curValue;
        };

        const condition = expression[curPointer];
        goToNextExpression();
        const trueVal = getNextExpressionValue();
        const falseVal = getNextExpressionValue();

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