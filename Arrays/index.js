const arr = [2, 5, 7, 4, 2, 6, 7, 8, 9, 1, 12, 34, 54, 545, 56, 7];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min);
