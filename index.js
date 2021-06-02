// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');


// Declare and initialize the 12 variables here:
let date = "Monday 2019-3-18";
let time = "10:05:34 AM";
//let astronautCount = 7;
let astronautCount = 
let astronautStatus = "ready";
let averageastronautMassKG = 80.7;
let crewMassKG = astronautCount * averageastronautMassKG;
let fuelMassKG = 760000;
let shuttleMassKG = 74842.31;
let totalMaaaKG = crewMassKG + fuelMassKG + shuttleMassKG;
let fuelTempCel = -225;
let fuelLevel = 100;
let weatherStatus = "clear"
let dashedline = "------------------------------------"

// Write code to generate the LC04 report here:
console.log(dashedline)
console.log(" > LC04 - LAUNCH CHECKLIST");
console.log(dashedline);



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.