// ex1
//simple
let user1 = {
  name: "John",
  years: 30
};
//destructuring

let {name, years: age, isAdmin = false} = user1;
console.log(name);
console.log(age);
console.log(isAdmin);

//ex2

const currentPlanet = "Earth";
console.log(currentPlanet);
let currentVisitorName = "Julia";
console.log(currentVisitorName);

// ex3

let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
console.log(sayHi)
//ReferenceError: alert is not defined
//The function sayHi() is declared inside an if block, using a function declaration, so it can't be reached from outside block.

//ex4

let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user.name);

//ex5

const user = {
  name: "John"
}
console.log(user.name)
// does it work? - no, if the 
user.name = "Pete"
console.log(user.name)
// const prevents reassignment of the variable user, but does not make the object itself immutable.
//so we are modifying only property of the same object.

//ex6

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}

let {Fred, Ted, Ghaith} = salaries;
console.log(Fred, Ted, Ghaith);

let sum = 0;

for (const key of Object.keys(salaries)) {
     sum += salaries[key];
}
// Calculate the total sum of all salaries and log the result
console.log(sum);
 
//function sumSalaries(salaries) {
//  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
//}

//ex7

let a = 0;
let b = 0;


//if (a + b < 4) {
//  result = 'Below';
//} else {
//  result = 'Over';
//}

let result = (a + b < 4) ? "Below" : "Over";
console.log(result); 

//ex8
//let message;

//if (login == 'Employee') {
//  message = 'Hello';
//} else if (login == 'Director') {
//  message = 'Greetings';
//} else if (login == '') {
// message = 'No login';
//} else {
//  message = '';
//}

let message = (login == "Employee") ? "Hello" : 
              (login == "Director") ? "Greetings" : 
              (login == "") ? "No login" : 
              "";