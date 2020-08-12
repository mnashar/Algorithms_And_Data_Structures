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