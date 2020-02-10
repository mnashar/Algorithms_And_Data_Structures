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

const kidsWithCandies1 = (candies, extraCandies) => {
    const ret = [];
    let max = 0;
    for (const val of candies) { 
        val > max && (max = val);
    }
    for (let i = 0; i < candies.length; ++i) {ret.push(candies[i] + extraCandies >= max);
    }
    return ret;
};

//Shuffle the Array
var shuffle = function (nums, n) {
    let res = [];
    for (i = 0; i < n; i++) {
        res.push(nums[i], nums[i + n]);
    }
    return res;
};