// Time Complexity O(2^n) ---> very bad.
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Memoized Solution: Time Complexity O(N)
function fibMemoizedTopDown(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;

    return res;
}

// It has serious memory problems for big numbers
function fibTabulatedVersion(n) {
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <= n; n++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums;
}
