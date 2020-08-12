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