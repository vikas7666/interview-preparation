function fibonaccseSeries(num) {
  const fibo = [];
  let num1 = 0, num2 = 1, nextnum;
  for (let i = 0; i < num; i++) {
    fibo.push(num1);
    nextnum = num1 + num2;
    num1 = num2;
    num2 = nextnum;
  }
  return fibo
}

console.log(fibonaccseSeries(7))  // [ 0, 1, 1, 2, 3, 5, 8]

// self method 
function fibonacciSeries(n) {
  let fiboSeries = []
  if (n <= 0) return [];
  if (n === 1) return [0]

  fiboSeries = [0, 1]

  for (let i = 2; i < n; i++) {
    fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2])
  }
  return fiboSeries
}
console.log(fibonacciSeries(7)); 