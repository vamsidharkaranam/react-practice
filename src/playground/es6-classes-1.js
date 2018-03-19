class Person{
  constructor(name = "Anonymous", age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    //return 'Hi ' + this.name + ' !';
    //es6 template string
    return `Hi, I am ${this.name}.`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      return description + ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.hasHomeLocation()){
      return greeting + ` I am from ${this.homeLocation}.`;
    } 
    return greeting;
  }
}

const me = new Student("Vamsi" , 26, 'Computer Science');
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

const traveller1 = new Traveller('Neelima', 31, 'Webster');
console.log(traveller1.getGreeting());