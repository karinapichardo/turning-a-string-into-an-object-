/* 
Write a function called "countWords".
Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, 
with its value being how many times that word appeared in the given string. 
If given an empty string, your function should return an empty object. 
*/

//1 input - string of words
function countWords(stringOfWords) {
  //checking if string is empty 
  if (stringOfWords === '') {
      //returning empty object
      return {};
  }
 //result object
 var createdObj = {}
 //spliting the input string into an array of words adding a space
 var words = stringOfWords.split(' ');
  //iterating through array of words using for loop
  for (var i = 0; i < words.length; i++) {
      //creating an alias for the current word in the array
      var currentWord = words[i];
      //checking if the current word is in result object
  if (createdObj[currentWord] === undefined){
      //if the current word is not in result object, gives it a value of 1
    createdObj[currentWord] = 1;
  }else {
      //incrementing the value of current word by 1
    createdObj[currentWord]++;
  }
 }
 // returning the resulted object
   return createdObj;
}

//testing our function by calling it 

var result1 = countWords('I love programming in JavaScript, I love coding');
console.log(result1); // -- > {I: 2, love: 2, programming: 1, in: 1, JavaScript: 1}

var result2 = countWords('');
console.log(result2); // --> {}
