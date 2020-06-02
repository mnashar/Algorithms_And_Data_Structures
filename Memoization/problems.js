function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;
    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    return memo[n];
}