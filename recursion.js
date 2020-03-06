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
        let subAnswer = exp2(base, exponent / 2);
        return subAnswer * subAnswer;
    } else {
        let subAnswer = exp2(base, ((exponent - 1) / 2));
        return subAnswer * subAnswer * base;
    }
    
}

function fibsRec(n) {
    if (n < 3) {
        return [0, 1].slice(0, n);
    }

    let fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}

function fibsIter(n) {
    let fibs = [0, 1];
    if (n < 3) {
        return fibs.slice(0, n);
    }

    while (fibs.length < n) {
        fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
    }

    return fibs;
}

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

function bsearch(numbers, target) {
    if (numbers.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];

    if (target === probe) {
        return probeIdx;
    } else if (target < probe) {
        const left = numbers.slice(0, probeIdx);
        return bsearch(left, target);
    } else {
        const right = numbers.slice(probeIdx + 1);
        const subProblem = bsearch(right, target);

        return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
}