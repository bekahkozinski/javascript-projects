//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require("readline-sync");

let startingFuelLevel;
let numberOfAstronauts;
let altitude;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question("What is the starting fuel level?");
startingFuelLevel = Number(startingFuelLevel);

while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
  startingFuelLevel = input.question("Invalid answer. Please enter a number between 5000 and 30000");
  startingFuelLevel = Number(startingFuelLevel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numberOfAstronauts = input.question("How many astronauts are on board?");
numberOfAstronauts = Number(numberOfAstronauts);

while (numberOfAstronauts >= 7) {
  numberOfAstronauts = input.question("Invalid answer. Please enter a number that is 7 or less");
  numberOfAstronauts = Number(numberOfAstronauts);
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel - 100 * numberOfAstronauts >= 0) {
  altitude += 50;
  startingFuelLevel -+ 100 * numberOfAstronauts;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”


If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `the shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
  output += "Orbit achieved!";
}