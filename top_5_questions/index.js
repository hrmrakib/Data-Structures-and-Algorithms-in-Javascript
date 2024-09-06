// Ques-1: Palindrome number
// An integer is a palindrome when it reads the same backward as forward.

//  Input: 121 -----> Output: true
//  Input: -121 -----> Output: false
//  Input: 10 -----> Output: false

const isPalindrome = (x) => {
  const str = x.toString().split("").reverse().join("");
  //   return Number(str) === x ? true : false;

  return x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(101));
// Ques-2: Armstrong number

// Ques-3: Prime number

// Ques-4: Fibonacci series

// Ques-5: Armstrong number in given range

// Ques-6: Prime number in given range

// Ques-7: Armstrong number in given range

// Ques-8: Prime number in given range
