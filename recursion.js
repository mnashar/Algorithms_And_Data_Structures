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