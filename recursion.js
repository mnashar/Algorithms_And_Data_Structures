// range
function range(start, end) {
    if (start === end) {
        return [];
    }

    let r = range(start, end - 1);
    r.push(end - 1);
    return r;
}

// sumRec
function sumRec(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let lastNum = numbers[numbers.length - 1];
    return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
}

function sumIter(numbers) {
    let sum = 0;

    numbers.forEach(function (number) {
        sum += number;
    });

    // or use reduce
    const reducedSum = numbers.reduce((acc, el) => acc + el);

    return sum;
    // return reducedSum;
}

// exp1, exp2
function exp1(base, exponent) {
    return exponent === 0 ? 1 : (base * exp1(base, exponent - 1));
}

function exp2(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent % 2 === 0) {
        
    } else {
        
    }
    
}