/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function sort(str){

  arr=str.split("");
  arr.sort();
  strN=arr.join("");

  return strN;
}
function isAnagram(str1, str2) {
  str3=str1.toLowerCase();
  str4=str2.toLowerCase();
  if(sort(str3)==sort(str4)){
    return true;
  }
  return false;
}

module.exports = isAnagram;
