// Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.

const arr = [12, 5, 7, 42, 24, 36, 7, 58, 91, 17, 52, 34, 54, 545, 56, 75];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
