/*
pseudo-code 작성해 보기)
1. this function accepts a sorted array and a value 
2. create a left(start) and right(end) pointer
3. while the left is smaller than right, 
    - set middle
    - if middle is equal to the value, return the index
    - if middle is too small? => set left 
    - if middle is too large? => set right

*/

function binarySearch(array = [], value) {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (array[middle] === value) return middle
    if (array[middle] < value) {
      left = ++middle
    }
    if (array[middle] > value) {
      right = --middle
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 4, 5, 6, 8, 12, 34, 55, 60], 1))
