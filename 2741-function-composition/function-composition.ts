type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
        let data = x;
        for(let i = functions.length - 1; i >= 0; i--) {
            data = functions[i](data)
        }
        return data;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */