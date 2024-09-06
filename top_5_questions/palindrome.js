// Palindrome number
// An integer is a palindrome when it reads the same backward as forward.

//  Input: 121 -----> Output: true
//  Input: -121 -----> Output: false
//  Input: 10 -----> Output: false

const isPalindrome = (x) => {
  const str = x.toString().split("").reverse().join("");
  // return x < 10 ? false : Number(str) === x ? true : false;

  return x < 10 ? false : x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(101));
