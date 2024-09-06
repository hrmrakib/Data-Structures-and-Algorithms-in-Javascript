// Ques-2: Armstrong number
// Ques-3: Prime number
// Ques-5: Armstrong number in given range
// Ques-6: Prime number in given range
// Ques-7: Armstrong number in given range
// Ques-8: Prime number in given range

// Valid Angram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Input: s = "anagram", t = "nagaram" -----> Output: true
// Input: s = "rat", t = "car" -----> Output: false

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }

  return sMap;

  for (let i = 0; i < t.length; i++) {
    if (!sMap[t[i]]) {
      return false;
    } else {
      sMap[t[i]]--;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("bat", "tab"));

// second way
function isAnagram1(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  console.log(sMap, tMap);
}

isAnagram1("anagram", "nagaram");

// another way
const isAnagram2 = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// console.log(isAnagram2("anagram", "nagaram"));
// console.log(isAnagram2("bat", "abt"));
// console.log("fst".split("").sort().join(""), "tfs".split("").sort().join(""));
