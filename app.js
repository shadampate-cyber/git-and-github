let age = 17;

if (age > 18) {
  console.log(`You're ${age} years old. Allowed`);
} else if (age === 18) {
  console.log("Good to go");
} else {
  console.log(`You're ${age} years old. Denied`);
}

let level = 200;
let hasId = true;

let student = level >= 200 && hasId ? "Allowed" : "Not Allowed";

console.log(student);

let loggedIn = true;
let hasPro = true;

loggedIn && hasPro
  ? console.log("Show the Video")
  : console.log("Don't Show the Video");
