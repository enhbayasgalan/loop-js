// Exercise 2

// 7. Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + "fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// Exercise 4

// Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

let n1 = 30;
for (i = 1; i <= 2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercise 5

// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

// let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

let str1 = "javascript";
for (i = 1; i <= str1.length; i++) {
  if ((i + 1) % 2 == 0) {
    console.log("Z");
  } else {
    console.log(str1.charAt(i));
  }
}

// Exercise 6

// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// let str2 = "don’t know why";
// Example output:
// “yes”

// Exercise 7

// Given a number n Calculate the factorial of the number

// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

// !4 ==> 1*2*3*4

let n2 = 5;
let sum = 1
for (let i = 1; i <= n2; i++) {
    sum = sum * i
    console.log(sum);
}


//  Exercise 8
 
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

for(let i=0; i<=10; i++){
  for(let i1 = 0; i1<+10; i1++){
    x3=i*i1
    console.log(`${i}x${i1}=${x3}`);
  }
}

// Exercise 9
 
// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.


// Exercise 10
 
//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.
 
// Example Output:
// 1 2 3 4 5 6 7 8 9 10
for ( i = 1; i <= 10; i++ ){
  sum = sum*i;
  console.log("%d", i);
}

// Exercise 11
 
// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.
 
// Example Output:
// The sum is 210
let too = 0
for( i=1; i<=20; i++ ){
  too = too+i
  // console.log(too);
}
  console.log(too);

// Exercise 12
 
// Count Vowels in a String Write a loop to count how many vowels are in a given string.
 
// let str = "hello world";
// Example Output:
// Number of vowels: 3
let toon = 0
let egshig = 0;
let str_3 = "hello world"
for( i = 1; i<=str_3.length; i++){
   if (str_3 [i] =="o" || str_3 [i] == "i" ||str_3 [i] == "a" || str_3 [i] == "e"  
   ){
    egshig = egshig + 1
   }
}
console.log("egshig baina" + egshig)

// Exercise 13
 
// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.
 
// Example Output:
// 1 3 5 7 9 11 13 15
// let sondgoi = 0
for( i=1; i<=15; i++ ){
  if( i%2!==0){
   console.log(i);
  }
}

// Exercise 14
 
// Check if a Number is Prime Write a loop to check if a number n is prime.
 
// let n = 7;
// Example Output:
// 7 is a prime number
let n = 7
for( i=0; i<=0; i++ ){
   if( i/7==0 ){
    console.log(i)
   }
}

// Exercise 15
 
// Reverse a String Write a loop to reverse the characters in a string.
 
// let str = "javascript";
// Example Output:
// tpircsavaj
let str = "javascript";
for(i = 1; i <= str.length; i++){
  if((i+1) % 1 == 0){
    console.log("tpirrscsavaj");
  } else {
    console.log(str.charAt(i));
  }
}

// Exercise 16
 
// Calculate Power of a Number Write a loop to calculate base^exponent.
 
// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32

let base = 2;
let exponent = 5;
let num1 = 1
for( i=1; i<=exponent; i++){
  num1 = num1*base
}
console.log(num1)

// Exercise 17
 
// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.
 
// Example Output:
// 5 10 15 20 25 30 35 40 45 50

let tavtoourj = 5
let tavtoo = 5
for( i=1; i<=10; i++ ){
  tavtoourj = tavtoo * i
  console.log(tavtoourj)
}
  
// Exercise 18
 
// Find the Largest Number in an Array Write a loop to find the largest number in an array.
 
// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98 

// Exercise 19
 
// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.
 
// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4
let varles = 0
let str_c3 = "javascript is amaizng"
for( i=1; i<=str_c3.length; i++){
  if(str_c3[i] == "a"){
    varles = varles + 1
  }
}
console.log(varles + " a  bn")

// Find All Divisors Write a loop to find all divisors of a number n.
 
// let n = 28;
// Example Output:
// 1 2 4 7 14 28
let u = 28
for( i=1; i<=28; i++ ){
  if( 28%i===0 ){
    console.log(i)
  }
}

 
// Exercise 22
 
// Check Palindrome Write a loop to check if a string is a palindrome.

121
12321 
// let str = "radar";
// Example Output:
// radar is a palindrome

let str_0 = "radar"
for( i=0; i<=str_0; i++ ){
   console.log("saisa")
}

// Exercise 23
 
// Count Words in a Sentence Write a loop to count the number of words in a sentence.
 
// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5

let sentence = "loops are fun to learn"
let car = ""
console.log(sentence.length+ " urt");
let ugs = 1;
for(i=1;i<=sentence.length;i++){
   if(sentence[i] ==" "){
    ugs = ugs + 1;
   }
}
console.log( ugs + " ug baina")
