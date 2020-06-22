function stepper(nums) {
    let table = new Array(nums.length).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        if (table[i] === true) {
            let range = nums[i];
            for (let step = 1; step <= range; step++) {
                table[i + step] = true;
            }
        }
    }

    return table[table.length - 1];
}

function stepper(nums, memo = {}) {
    if (nums.length in memo) return memo[nums.length];

    if (nums.length === 1) return true;
    if (nums.length === 0) return false;

    let range = nums[0];

    for (let i = 1; i <= range; i++) {
        if (stepper(nums.slice(i), memo)) {
            memo[nums.length] = true;
            return true;
        }
    }

    memo[nums.length] = false;
    return false;
}

// tabulated
function maxNonAdjacentSum(nums) {
    if (nums.length === 0) return 0;

    let table = new Array(nums.length).fill(0);
    table[0] = nums[0];

    for (let i = 1; i < table.length; i++) {
        let skipLeftNeighbor = table[i - 2] === undefined ? 0 : table[i - 2];
        let bestWithThisNum = nums[i] + skipLeftNeighbor;
        let bestWithoutThisNum = table[i - 1];
        table[i] = Math.max(bestWithThisNum, bestWithoutThisNum);
    }

    return table[table.length - 1];
}

// memoized
function maxNonAdjacentSum(nums, start = 0, end = nums.length - 1, memo = {}) {
    let key = start + ',' + end;
    if (key in memo) return memo[key];
    if (start > end) return 0;

    let ways = [];
    for (let i = start; i <= end; i++) {
        let amt = nums[i];
        ways.push(amt + maxNonAdjacentSum(nums, start, i - 2, memo) + maxNonAdjacentSum(nums, i + 2, end, memo));
    }

    memo[key] = Math.max(...ways);
    return memo[key];
}

function maxNonAdjacentSum(nums, memo = {}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return 0;

    memo[nums.length] = Math.max(
        maxNonAdjacentSum(nums.slice(1), memo),
        nums[0] + maxNonAdjacentSum(nums.slice(2), memo)
    );

    return memo[nums.length];
}

function minChange(coins, amount) {
    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    coins.forEach((val) => {
        for (let amt = 0; amt < table.length; amt++) {
            for (let qty = 0; qty * val <= amt; qty++) {
                remainder = amt - qty * val;
                attempt = table[remainder] + qty;
                if (attempt < table[amt]) table[amt] = attempt;
            }
        }
    });

    return table[amount];
}