/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str1= str.replace(/[^A-Z0-9]/ig, "");
  var arr=str1.split("");

  var arr1=arr.reverse();

  var str2=arr1.join("");

  if(str1.toUpperCase()==str2.toUpperCase()){
    return true;
  }



  return false;
}

module.exports = isPalindrome;
