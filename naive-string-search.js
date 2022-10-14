/*
pseudo-code) 
1. write a function called search, which takes two strings(string, pattern). 
2. loop over the longer string
3. loop over the shorter string
4. if the character don't match? => break out of the inner loop
5. if the character match? => check if the next character also match
6. if you complete the inner loop? => increase count of matches
7. return count
*/

function stringSearch(string = '', pattern) {
  if (string.length < pattern.length) return 0

  let i = 0
  const end = string.length - 1 - (pattern.length - 1)
  let count = 0

  while (i <= end) {
    const subString = string.slice(i, i + pattern.length)
    count = subString === pattern ? ++count : count
    i++
  }

  return count
}

console.log(stringSearch('hello world! world! hahahaha', 'world'))

/*
강의 내용)
1. 반복문 내의 break
    - 아래 예제에서 inner loop에 break이 사용되었다. 
    - break를 실행하게 되면, j는 0으로 초기화 되고 i++ 된다. 
2. j === pattern.length -1 은 
    break 없이 모든 inner loop가 실행되었음 === pattern에 해당하는 문자열을 찾았음을 의미한다. 
*/

function stringSearch2(string = '', pattern = '') {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== string[i + j]) break
      if (j === pattern.length - 1) count++
    }
  }
  return count
}
console.log(stringSearch2('hello world! world! hahahaha', 'ha'))
