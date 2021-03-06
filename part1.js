// Running Sum of 1d Array
let runningSum = function (nums) {
    let res = [];
    let running = 0;
    for (let i = 0; i < nums.length; i++) {
        running += nums[i];
        res.push(running);
    }
    return res;
};

// Remove Vowels from a String
let removeVowels = function (S) {
    let arr = [];
    const vowels = 
    ["a", "e", "i", "o", "u"];
    for (let i = 0; i < S.length; i++) {
        if (!vowels.includes(S[i])) {
            arr.push(S[i]);
        }
    }

    return arr.join("");
};

// Kids With the Greatest Number of Candies
const kidsWithCandies3 = (candies, extraCandies, max = Math.max(...candies)) => candies.map(candy => candy + extraCandies >= max);

const kidsWithCandies2 = (candies, extraCandies) => {
    const ret = [];
    let max = 0;
    for (const val of candies) { 
        val > max && (max = val);
    }
    for (
        let i = 0; i < candies.length; ++i) {
            ret.push(
                candies[i] + extraCandies >= max
                );
    }
    return ret;
};

const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
};

//Shuffle the Array
var shuffle = function (nums, n) {
    let res = [];
    for (i = 0; i < n; i++) {
        res.push(nums[i], nums[i + n]);
    }
    return res;
};

function isSubstring(phrase, subphrase) {
    return phrase.includes(subphrase);
}

// fizzBuzz

function fizzBuzz(array) {
    const fizzBuzzArr = [];

    array.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzBuzzArr.push(el);
        }
    });

    return fizzBuzzArr;
}

// isPrime
function isPrime(n) {
    if (n < 2) { return false; }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// sumOfNPrimes

function sumOfNPrimes(n) {
    let sum = 0;
    let countPrimes = 0;
    let i = 2;

    while (countPrimes < n) {
        if (isPrime(i)) {
            sum += i;
            countPrimes+=1;
        }
        i++;
    }

    return sum;
}

// defining the function
function titleize(names, callback) {
    let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(titleized);
};

// invoking the function
titleize(["Mary", "Brian", "Leo"], (names) => {
    names.forEach(name => console.log(name));
});

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
    this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function () {
    trickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return function (food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};