function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;
    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    return memo[n];
}

function minChange(coins, amount, memo = {}) {
    if (amount === 0) return 0;

    if (amount in memo) return memo[amount];

    let num_coins = []
    coins.forEach(coin => {
        if (coin <= amount) {
            num_coins.push(minChange(coins, amount - coin, memo) + 1);
        }
    });

    memo[amount] = Math.min(...num_coins);
    return memo[amount];
}


module.exports = {
    lucasNumberMemo,
    minChange
};