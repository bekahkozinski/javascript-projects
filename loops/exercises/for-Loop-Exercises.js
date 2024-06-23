/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//Part a)
for (let i = 0; i < 21; i++) {
  console.log(i);
}

//Part b)
for (let i = 0; i < 30; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Part c)
for (let i = 12; i >= -14; i-=2) {
  console.log(i);
}

// Part d)
for (let i = 50; i >= 20; i-=3) {
  console.log(i);
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 


let program = "LaunchCode";
let list = [1, 5, "LC101", "blue", 42];

//Part a)
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

//Part b)
let reversed = "";
for (let i = 0; i < program.length; i++) {
  reversed = program[i] + reversed;
}
for (let i = 0; i < reversed.length; i++) {
  console.log(reversed[i]);
 }

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

//Part a)
let array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

// Part b)
  let odds = [], evens = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]); 
    } else {
      evens.push(array[i]);
    }
  }
  console.log(odds);
  console.log(evens);
  