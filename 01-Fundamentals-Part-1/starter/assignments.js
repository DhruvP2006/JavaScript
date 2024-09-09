/*
let country = "India";
let continent = "Asia";
let population = 1417;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Hindi";
isIsland = true;

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population <= 33);
let description =
  country +
  " is in " +
  continent +
  " and it`s " +
  population +
  " million people speaks " +
  language;
console.log(description);

description = `${country} is in ${continent} and it's ${population} million people speaks ${language}`;

console.log(description);
if (population > 33) {
  console.log(`${country} is ${population - 33} million above average`);
} else {
  console.log(`${country} is ${33 - population} million below average`);
}

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> flase
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

if (language == "English" && population <= 50 && isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

const language = "hindi";
switch (language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

let country = "India";
let population = 1417;

console.log(
  `${country}'s population is ${
    population > 33 ? "above average" : "below average"
  } `
);
*/
