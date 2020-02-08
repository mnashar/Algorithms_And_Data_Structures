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
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < S.length; i++) {
        if (!vowels.includes(S[i])) {
            arr.push(S[i]);
        }
    }
    return arr.join("");
};