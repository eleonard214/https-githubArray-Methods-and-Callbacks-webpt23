import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let team = fifaData.filter(element => element.Year === 2014 && element.Stage === "Final");
for(let i = 0; i < team.length; i++){
    console.log("Home Team Name: " + team[i]["Home Team Name"])
    console.log("Away Team Name: " + team[i]["Away Team Name"])
    console.log("Home Team Goals: "+ team[i]["Home Team Goals"])
    console.log("Away Team Goals: " + team[i]["Away Team Goals"])
    if(team[i]["Home Team Goals"] > team[i]["Away Team Goals"]){
        console.log(team[i]["Home Team Name"])
    }else{
        console.log(team[i]["Away Team Name"])
    }
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(element => (element.Stage === "Final"))
}
console.log("getFinals", getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb, data) {
    let years = []    
    cb(data).map(item => years.push(item.Year))
    return years
}
console.log("getYears", getYears(getFinals, fifaData))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb, data) {
let winners = []
cb(data).forEach(item => {
    if(item["Home Team Goals"] > item["Away Team Goals"]){
        winners.push(item["Home Team Name"])
    }else {
        winners.push(item["Away Team Name"])
    }
})  
return winners
}
console.log("getWinners", getWinners(getFinals, fifaData))

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2, cb3, data) {
let winners = cb1(cb3, data);
let years = cb2(cb3, data);
let winningString = winners.forEach((item, index) => {
    console.log(`In ${years[index]}, ${item} won the world cup!`)
})
}

getWinnersByYear(getWinners, getYears, getFinals, fifaData);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let avgHomegoals = data.reduce((acc,index) => {
        return acc + index["Home Team Goals"]
        / data.length}, 0)
    let avgAwaygoals = data.reduce((acc, index) => {
        return acc + index["Away Team Goals"]
        / data.length}, 0)
    return {Home: avgHomegoals, Away: avgAwaygoals}
}

console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
