function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.toLowerCase()
  const arr1 = newWord.split('').reverse()
  const result = arr1.join('')

  return word === result ? true : false ;
  
}
console.log(isPalindrome('Noon'))
/* 
  Add your pseudocode here
  initialize the function with a word say "NoOn"
  turn the string to lowercase and store in an array
  split array elements 
  reverse array element
  join araay element
  compare new array to old array
  return boolean
*/

/*
  Add written explanation of your solution here
  1.function receives string
  2.turns the string into array & splits it; to remove special characters
  3.The function then reverses the array and rejoins it
  4.compare the new result with the first
  5.return boolean value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
