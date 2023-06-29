function isPalindrome(string) {
  string = string.toLowerCase()
  return string === string.split('').reverse().join('');
  
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("Expecting:true")
  console.log("=>",isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting:false")
  console.log("=>",isPalindrome("ab"))
}

module.exports = isPalindrome;
