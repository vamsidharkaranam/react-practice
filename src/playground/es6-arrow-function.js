//sec 3 Lecture 14, 15

console.log("arrow-functions");

//es6 functions are always anonymous
//there are no named arrow functions 

const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(4));

//Arrow function expression syntax
//arrow function only returning single expression

const squareArrowExpression = (x) => x * x;
console.log(squareArrowExpression(4));

//arguments object - no longer baund with arrow functions
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

add(55, 2, 1001);

const addArrow = (a, b) => {
  // console.log(arguments); 
  //throws error because we cant use arguments object in arrow functions
  return a + b;
};

addArrow(55, 2, 1001);

//this keyword no longer bound
const user = {
  name: 'Vamsidhar',
  cities: ['webster', 'Hyderabad', 'Chennai'],
  printCities: function () {
    const self = this;
    this.cities.forEach(function (city) {
      console.log(self.name + ' lived in ' + city);
    });
  }
};

user.printCities();

//with arrow function we can eleminate work around with 'self'
//Arrow function don't find its own 'this' value - is very useful here
const user1 = {
  name: 'Vamsidhar',
  cities: ['webster', 'Hyderabad', 'Chennai'],
  printCities: function () {
    // const self = this;
    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' + city);
    });
  }
};

user1.printCities();


//if we try to change 'method' in to arrow function, 'this' will become 'undefined' which throws error
//the arrow function of 'method' don't bind its own 'this' value hence shows error

// const user2 = {
//   name: 'Vamsidhar',
//   cities: ['webster', 'Hyderabad', 'Chennai'],
//   printCities: ()=>{
//     // const self = this;
//     this.cities.forEach((city)=>{
//       console.log(this.name + ' lived in ' + city);
//     });
//   }
// };

// user2.printCities();



//using es6 method definition syntax
const user3 = {
  name: 'Vamsidhar',
  cities: ['webster', 'Hyderabad', 'Chennai'],
  printCities() {
    // const self = this;
    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' + city);
    });
  }
};

user3.printCities();

//difference map vs forEach
//map returns new array with all modified items rather than executing for each item

const user4 = {
  name: 'Vamsidhar',
  cities: ['webster', 'Hyderabad', 'Chennai'],
  printCities() {
    // const self = this;
    return this.cities.map((city) => this.name + ' lived in ' + city);
  }
};

console.log(user4.printCities());

//challenge
const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((number) => number + '*' + this.multiplyBy + '=' + this.multiplyBy * number);
  }
};
console.log(multiplier.multiply());


const rupeeConversion = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  currencyValue: (number) => number,
  calculate(currencyValue) {
    return this.numbers.map((number) => number + '*' + currencyValue + '=' + currencyValue * number);
  }
};
console.log(rupeeConversion.calculate(rupeeConversion.currencyValue(64.25)));