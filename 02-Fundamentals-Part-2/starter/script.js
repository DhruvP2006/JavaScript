"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;


function logger() {
  console.log(`My name is Jonas`);
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


//Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthyear) {
  return 2037 - birthyear;
}

//function expression

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);


//Arrow function
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retiers in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of  apple and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retiers in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yy = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Dhruv";
const Dhruv = [firstName, "Pankhania", "2037-2006", "teacher", friends];

console.log(Dhruv);
console.log(Dhruv.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friedns: ["Michael", "Peter", "Steven"],
};



const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

console.log(jonas.'last' +nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstname, lastname, age, job and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

//Challenge

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license `;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge

console.log(jonas.getSummary());


console.log("Lifting weight repitition 1 🏋️");
console.log("Lifting weight repitition 2 🏋️");
console.log("Lifting weight repitition 3 🏋️");
console.log("Lifting weight repitition 4 🏋️");
console.log("Lifting weight repitition 5 🏋️");
console.log("Lifting weight repitition 6 🏋️");
console.log("Lifting weight repitition 7 🏋️");
console.log("Lifting weight repitition 8 🏋️");
console.log("Lifting weight repitition 9 🏋️");
console.log("Lifting weight repitition 10 🏋️");

//for loop keeps running while condition is true
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weight repitition ${rep} 🏋️`);
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// ...
// console.log(jonasArray[4]);
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //Fiiling types array
  // types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "number") break;

  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️`);
  }
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitition ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repitition ${rep} 🏋️`);
  rep++;
}
  

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
