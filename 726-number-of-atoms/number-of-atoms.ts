function countOfAtoms(formula: string): string {
    const stack = []
    let i = 0, counter: Record<string, number> = {}, result = ''
    while(i < formula.length) {
        const charCode = formula.charCodeAt(i)
        if(formula[i] === '(') {
            stack.push(counter)
            counter = {}
            i++
        } else if(charCode >= 65 && charCode <= 90) {
            let name = getElement()
            if(!counter[name]) counter[name] = 0
            counter[name] += getNumber()
        } else if(formula[i] === ')') {
            i++
            let number = getNumber();
            multiplyCounter(counter, number);
            counter = mergeCounter(stack.pop() ?? {}, counter)
        } else {
            console.log('unhandled case', formula[i])
        }
    }
    const keys = Object.keys(counter).sort();
    for(let i = 0; i < keys.length; i++) {
        result += keys[i] + (counter[keys[i]] > 1 ? counter[keys[i]] : '')
    }
    return result;
    // ========================== UTILS ==========================
    function getElement() {
        let name = formula[i];
        i++
        while(formula.charCodeAt(i) >= 97 && formula.charCodeAt(i) <= 122) {
            name += formula[i++]
        }
        return name;
    }
    function getNumber() {
        let number = '';
        while(formula.charCodeAt(i) >= 48 && formula.charCodeAt(i) <= 57) {
            number += formula[i++]
        }
        return number ? parseInt(number): 1;
    }
    function multiplyCounter(counter: Record<string, number>, n: number) {
        for(const key in counter) {
            if(counter[key]) counter[key] *= n
        }
    }
    function mergeCounter(counterA: Record<string, number>, counterB: Record<string, number>) {
        const merged = {...counterB}
        for(const key in counterA) {
            merged[key] = counterA[key] + (counterB[key] ?? 0)
        }
        return merged;
    }
};

