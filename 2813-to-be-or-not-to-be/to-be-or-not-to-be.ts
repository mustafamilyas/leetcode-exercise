type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (comparedValue: any) => {
            if(comparedValue !== val) throw "Not Equal"
            return true
        },
        notToBe: (comparedValue: any) => {
            if(comparedValue === val) throw "Equal"
            return true
        },
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */