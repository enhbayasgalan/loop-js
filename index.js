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
}
console.log(sum);
