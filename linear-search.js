/* 
linear search pseudo-code 작성해 보기) 
1. this function accepts an array and a value.
2. loop through the array and check if the current value is equal to the given value. 
3. if it is, return the index at which the element is found, 
4. if the value is never found, return -1. 
*/

function linearSearch(array = [], value) {
  for (let pointer = 0; pointer < array.length; pointer++) {
    if (array[pointer] === value) return pointer
  }
  return -1
}

console.log(linearSearch([1, 2, 3, 'a', 'b'], 'g')) // -1
