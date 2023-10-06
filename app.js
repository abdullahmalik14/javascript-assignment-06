//CHAPTER NO 35 TO 38
// Question N0:01

var currentDate = new Date();
document.write("<b> Date $ Time</b>"+"<br>");
document.write(currentDate);

// Question N0:02
var firstName = prompt("Enter first name");
var secondName = prompt("Enter second name");

function greetUser(firstName,secondName){
    alert("welcome "+firstName +" "+ secondName);
}
greetUser(firstName,secondName);

// Question N0:03
var userInput1 = +prompt("Enter first integer value");
var userInput2 = +prompt("Enter second integer value");
function addNumbers(){
    var addNumbers = userInput1 + userInput2;
    console.log(addNumbers);
}

addNumbers(userInput1,userInput2);

// Question N0:04
var userInput1 = +prompt("Enter first integer value");
var operator = prompt("Enter the operator +,-,*,/")
var userInput2 = +prompt("Enter second integer value");
function calculation(userInput1,operator,userInput2){
    switch(operator){
        case "+":
           return userInput1 + userInput2;
        case "-":
            return userInput1 - userInput2;
        case "*":
            return userInput1 * userInput2;
        case "/":
            return userInput1 / userInput2;
        default:
            return ("wrong value");

}
}
var result = calculation(userInput1,operator,userInput2);
console.log(result);

// Question N0:05
var userInput = prompt("Enter a number you want to square");
function square(){
    return userInput * userInput
}

var result = square(userInput);
console.log(result);

// Question N0:06
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } 
    else {
      return n * factorial(n - 1);
    }
  }
  
  var num = 0
  var result = factorial(num); 
  console.log("Factorial of " + num + " is " + result);
  

// Question N0:07
function displayCounting(startNumber, endNumber) {
    
      for (var i = startNumber; i <= endNumber; i++) {
        console.log(i);
      }
    
  }
  
  var startNumber = +prompt("enter a start number");
  var endNumber = +prompt("enter a end number");
  displayCounting(startNumber, endNumber);
  
// Question N0:08
function calculateHypotenuse(base,perpendicular){
    function calculateSqaure (x){
        return x * x
    }
   var baseSquare = calculateSqaure (base);
   var perpendicularSquare = calculateSqaure (perpendicular);

   var HypotenuseSquare = baseSquare + perpendicularSquare;
   var Hypotenuse = Math.sqrt(HypotenuseSquare);

   return Hypotenuse;
}
var base = 5;
var perpendicular = 6;
var result = calculateHypotenuse(base,perpendicular);
console.log(result);

// Question N0:09
//arguments as variables

function calculateAreaOfRectangle(width,height){
    return width * height;
}
var width = 10;
var height = 20;
var res = calculateAreaOfRectangle(width,height);
console.log("Area of the rectangle is: " + res);

//arguments as values

function calculateAreaOfRectangle(width,height){
    return width * height;
}

var res = calculateAreaOfRectangle(9,10);
console.log("Area of the rectangle is: " + res);



// Question N0:10
function isPalindrome(str) {

    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
  }
  
  var inputString = "madam";
  if (isPalindrome(inputString)) {
    console.log(inputString + " is a palindrome.");
  } else {
    console.log(inputString + " is not a palindrome.");
  }
 
  
// Question N0:11
function capitalizeFirstLetterOfEachWord(inputString) {
    return inputString.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
  }
  
  
  var inputString = 'the quick brown fox';
  var outputString = capitalizeFirstLetterOfEachWord(inputString);
  console.log("Original: " + inputString);
  console.log("Capitalized: " + outputString);
  
  // Question N0:12
  function findLongestWord(inputString) {
    var words = inputString.split(' ');
    var longestWord = '';
  
    words.forEach(function(word) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  

  var inputString = 'Web Development Tutorial';
  var longestWord = findLongestWord(inputString);
  console.log("Longest word: " + longestWord);
  
    // Question N0:13
    function countOccurrences(inputString, letter) {
        var count = 0;
      
        for (var i = 0; i < inputString.length; i++) {
          if (inputString.charAt(i) === letter) {
            count++;
          }
        }
      
        return count;
      }
      
      // Example usage:
      var inputString = 'JSResourceS.com';
      var letterToCount = 'o';
      var occurrences = countOccurrences(inputString, letterToCount);
      console.log("Number of occurrences of '" + letterToCount + "': " + occurrences);
      
   // Question N0:14
   function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
  }
  
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
  }
  
  // Example usage:
  var radius = 5;
  calcCircumference(radius); // Output: The circumference is 31.42
  calcArea(radius); // Output: The area is 78.54
  
  
  
