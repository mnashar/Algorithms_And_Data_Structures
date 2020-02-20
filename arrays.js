// Array.prototype.uniq
Array.prototype.uniq = function () {
    let uniqueArray = [];

    for (let i = 0; i < this.length; i++) {
        if (uniqueArray.indexOf(this[i]) === -1) {
            uniqueArray.push(this[i]);
        }
    }

    return uniqueArray;
};

// alternate solution using 'forEach'
Array.prototype.uniq2 = function () {
    let uniqueArray = [];

    // here we are using Array#forEach with a callback that is
    // closing over 'uniqueArray'
    this.forEach(function (el) {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el);
        }
    });

    return uniqueArray;
};

// Array#twoSum
Array.prototype.twoSum = function () {
    const pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
};

Array.prototype.twoSum2 = function () {
    let pairs = [];
    const indexHash = {};

    this.forEach((el, idx) => {
        if (indexHash[el * -1]) {
            const newPairs = indexHash[el * -1].map((prevIdx) => [prevIdx, idx]);

            // remember, concat doesn't mutate the original object
            pairs = pairs.concat(newPairs);
        }

        // since we can't set a default attribute value in JavaScript,
        // we will need to check for existence first
        indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = [idx];
    });

    return pairs;
};

Array.prototype.transpose = function () {

    // this creates the empty transposed array
    // just a neat trick to avoid iterating
    const columns = Array.from(
        { length: this[0].length },() => Array.from({ length: this.length })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;
};

const NUMS = [1, 2, 3, 4, 5];

// Array#myEach
Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};