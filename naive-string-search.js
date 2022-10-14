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
