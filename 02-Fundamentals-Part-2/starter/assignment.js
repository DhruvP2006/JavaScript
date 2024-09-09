"use strict";
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital is ${capitalCity}`;
}

const country1 = describeCountry("India", 1417, "New Delhi");
const country2 = describeCountry("Russia", 147, "Moscow");
const country3 = describeCountry("Japan", 126, "Tokyo");

console.log(country1, country2, country3);


function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;
}

const c1 = percentageOfWorld1("India", 1417);
const c2 = percentageOfWorld1("Russia", 147);
const c3 = percentageOfWorld1("Japan", 126);

console.log(c1, c2, c3);

const percentageOfWorld2 = function (country2, population2) {
  return `${country2} has ${population2} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population`;
};

const c4 = percentageOfWorld1("India2", 1417);
const c5 = percentageOfWorld1("Russia2", 147);
const c6 = percentageOfWorld1("Japan2", 126);

console.log(c4, c5, c6);



function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people  and it's capital city is ${capitalCity}`;
}

const c1 = describeCountry("India", 1417, "New Delhi");
const c2 = describeCountry("Russia", 147, "Moscow");
const c3 = describeCountry("Japan", 126, "Tokyo");

console.log(c1, c2, c3);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const c1 = percentageOfWorld1(1417);
const c2 = percentageOfWorld1(147);
const c3 = percentageOfWorld1(126);

const c4 = percentageOfWorld2(1417);
const c5 = percentageOfWorld2(147);
const c6 = percentageOfWorld2(126);

console.log(c1, c2, c3, c4, c5, c6);


const percentageOfWorld3 = (population) => (population / 7900) * 100;

const c1 = percentageOfWorld3(1417);
const c2 = percentageOfWorld3(147);
const c3 = percentageOfWorld3(126);

console.log(c1, c2, c3);


const percentageOfWorld1 = (population) => (population / 7900) * 100;

const describePopulation = function (country, population) {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )}% of the world `;
};

console.log(describePopulation(`India`, 1417));


const populations = [1417, 147, 126, 31];

console.log(populations.length === 4);

const percentageOfWorld1 = (population) => (population / 7900) * 100;

const percentage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentage);


const neighbours = ["Nepal", "Sri Lanka", "Bhutan"];

neighbours.push("utopia");

console.log(neighbours);

neighbours.pop();

console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf("Sri Lanka")] = "Bangladesh";

console.log(neighbours);


const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: "1417",
  neighbours: ["Nepal", "Sri Lanka", "Bhutan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${
    myCountry.language
  }-speaking people, ${
    myCountry.neighbours.length + 1
  } neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
*/

/* Write your code below. Good luck! 🙂 */

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
