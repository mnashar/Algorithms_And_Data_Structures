function balancedParens(str) {
   
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        var char = str[i];

        if (pairs[char]) {
            stack.push(char);
        } else if (char === '}' || char === ']' || char === ')') {
            if (pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

exports.balancedParens = balancedParens;
