function getPonyFullName(pony) {
  if (pony.isChampion) {
    var name = "Champion " + pony.name;
    return name;
  }
  return pony.name;
}

// is equivalent to declaring it at the top of the function:

function getPonyFullName1(pony) {
  var name;
  if (pony.isChampion) {
    name = "Champion " + pony.name;
    return name;
  }
  // name is still accessible here
  return pony.name;
}

function getPonyFullName2(pony) {
  if (pony.isChampion) {
    let name = "Champion " + pony.name;
    return name;
  }
  // name is not accessible here
  return pony.name;
}

const PONY = {};
PONY.color = "blue"; // works
//But you can’t assign another object:
const PONY = {};

const PONIES = [];
PONIES.push({ color: "blue" }); // works

// Shorthands in object creation

function createPony() {
  const name = "Rainbow Dash";
  const color = "blue";
  return { name: name, color: color };
}

//can be simplified to:
function createPony1() {
  const name = "Rainbow Dash";
  const color = "blue";
  return { name, color };
}

// Similarly, when you want to define a method in the object:

function createPony2() {
  return {
    run: () => {
      console.log("Run!");
    },
  };
}

// you can simplify it to:

function createPony3() {
  return {
    run() {
      console.log("Run!");
    },
  };
}

// Destructuring assignment

var httpOptions = { timeout: 2000, isCache: true };
// later
var httpTimeout = httpOptions.timeout;
var httpCache = httpOptions.isCache;

// Now, in ES2015, you can do:

const httpOptions1 = { timeout: 2000, isCache: true };
// later
const { timeout: httpTimeout, isCache: httpCache } = httpOptions1;

// The cool thing is that it also works with nested objects:
const httpOptions3 = { timeout: 2000, cache: { age: 2 } };
// later
const {
  cache: { age },
} = httpOptions3;
// you now have a variable named 'age' with value 2

function randomPonyInRace() {
  const pony = { name: "Rainbow Dash" };
  const position = 2;
  // ...
  return { pony, position };
}
const { position, pony } = randomPonyInRace();

// Default parameters and values

function getPonies(size, page) {
  size = size || 10;
  page = page || 1;
  // ...
  server.get(size, page);
}

getPonies(20, 2);
getPonies(); // same as getPonies(10, 1);
getPonies(15); // same as getPonies(15, 1);

function getPonies1(size = 10, page = 1) {
  // ...
  server.get(size, page);
}

//  Rest operator

function addPonies3(ponies) {
  for (var i = 0; i < arguments.length; i++) {
    poniesInRace.push(arguments[i]);
  }
}
addPonies3("Rainbow Dash", "Pinkie Pie");

// ES2015 gives us a way better syntax, using the rest operator …

function addPonies4(...ponies) {
  for (let pony of ponies) {
    poniesInRace.push(pony);
  }
}

// The rest operator can also work when destructuring data:
const [winner1, ...losers] = poniesInRace;
// assuming 'poniesInRace' is an array containing several ponies
// 'winner' will have the first pony,
// and 'losers' will be an array of the other ones


