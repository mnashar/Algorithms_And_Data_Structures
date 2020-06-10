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