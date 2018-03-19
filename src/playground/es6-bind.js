const obj = {
  name: "Vamsidhar",
  getName(){
    return this.name;
  }
};

console.log("calling with object method: ", obj.getName());
//const getName = obj.getName;
// console.log("calling regular method: ", getName());
//here we actually broken the this binding
//the default value of any regular function 'this' is 'undefined'
//for example
const testFunction = function(){
  return this;
};
console.log(testFunction());
//here the context that ran is very different
//obj.getName() ran in the context of on object
//If we assign to any function outside object, we are loosing context

const getName = obj.getName.bind(obj);
//here we are setting the 'this' context
console.log("calling with regular method: ", getName());
