// Second largest numbers
// Give an array, find arr of second largest number

// Input: [11, 24, 56, 34, 60] -> Output: 56
// Input: [10, 9, 6, 10] -> Output: 9

const n = [11, 24, 56, 34, 60];

// First way


// Second way
n.sort((a, b) => a - b)
n[length - 2]