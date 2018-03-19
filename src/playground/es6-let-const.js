var nameVar = 'Vamsi';
var nameVar = 'Karanam';
console.log(nameVar);
// var allows reassign, redefine
//let - don't allow redefign but we can reassign
//const - don't allow redefign and reassign. Variable become read-only after initial decleration. const used for defaultig.

let nameLet = 'Vamsi';
// let nameLet = 'Karanam';
console.log(nameLet);

const nameConst = 'Vamsi';
//  nameConst1 = 'karanam';
console.log(nameConst);

//scoping
//var based variables are function scoped
//let and const are function scoped as well as block level scoped

var fullName = 'Vamsidhar Karanam';

if(fullName){
  //'let firstName' or 'Const firstName' will throw error if they are used outside of this block
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);