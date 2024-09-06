// Fibonacci series
// Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1
// Input: n = 3 -----> Output: 2

const fibonacci = (n) => {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a;
};

// Recursive solution
const fibonacci2 = (n) => {
  if (n <= 1) return n;

  return fibonacci2(n - 1) + fibonacci2(n - 2);
};

console.log(fibonacci2(5));

// One line
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(3));
