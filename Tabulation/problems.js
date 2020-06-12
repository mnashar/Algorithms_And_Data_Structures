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