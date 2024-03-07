function fibonacciSeries(N) {
    let fibSeries = [0, 1];

    for (let i = 2; i < N; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return fibSeries.slice(0, N).join(' ');
}
const N = 10;
console.log(fibonacciSeries(N));
