

   
// Math methods ( abs, max, min, round, floor, pow, sqrt, random )
var number = 2;

document.write ( Math.round(Math.random() * 10) );


var phrase = "Albert";
var age = 20;
var gpa = 3.21;
var isMale = true;

document.write(phrase);




// working with number
var number = 6;

document.write (number * (11 % 3));





// getting input from user

var name = window.prompt("What is ur name");
var age = window.prompt("What is ur age");
document.write("Hey" + " " + name + ", how are you today." + " "+ age + " " + "you are years old");



// creating a basic cal

var num1 = window.prompt("enter a number");
var num2 = window.prompt("enter another number");


num1 = parseInt(num1);
num2 = parseInt(num2);

document.write(num1 + num2);




array
var fruits = ["apples", "Oranges", "Peaches"];

document.write(fruits);



// function
function sayHi(name, age){
  document.write("<h1>Hello" + " "+ name + "</h1>");
  document.write("<p> Your are" + " " + age + "</p>");
}
sayHi("Albert", 20);

function addition(num1, num2){
  return num1 + num2;
}
var addedNumbers = addition(4, 5);

document.write( addedNumbers);


event listeners
function handleClick (){
 alert("clicked")
}

// if statements

var isMale = false;
var isTall = false;


if (isMale && isTall){
 document.write("you are a tall male");
} else if (isMale && !isTall){
 document.write("you are a short male");
} else if(!isMale && isTall){
 document.write("you are not male, buh you are tall");
} else {
 document.write("you are either not male or not tall or both");
}

// if statements w/ comparisons

function max(num1, num2, num3){
 if(num1 >= num2 && num1 >= num3){
  return num1;
 }else if (num2 >= num1 && num2 >= num3){
  return num2;
 }else{
  return num3;
 }
}
document.write(max(3, 4, 5));

// switch statements

function getDayName(dayNum){
 var day;


 switch(dayNum){
  case 0:
   day = "sunday";
   break;

  case 1:
   day = "monday";
   break;

  case 2:
   day = "tuesday";
   break;

  case 3:
   day = "wednesday";
   break;

  case 4:
   day = "thursday";
   break;

  case 5:
   day = "friday";
   break;

  case 6:
   day = "saturday";
   break;
  default:
   day = "Day doesn't exit," + dayNum + " " + "a valid number";
 }

 return day;
}

document.write(getDayName(1));


// objects

var person = {
 name: "Albert",
 age: 20,
 isMale: true,
 occupation: "programmer"

};

document.write(person.name);

// real world object

var myMovie = {
 title: "the social network",
 releaseYear: "2010",
 duration: 2.0,
 actors: [
  {
   name: "Jessie Eisenberg",
   birthday: new Date ("october 5, 1993"),
   hometown: "New york, New york"
  },
  {
   name: "Roonie Mara",
   birthday: new Date("April 17, 1985"),
   hometown: "Bedford, New york"
  }
 ]
}
document.write(myMovie.actors[0].name);

// while loops

var i = 1;
while(i <= 10){
 document.write(i + "<br/>");
 i++;
}

// password checker

var password =  "bert";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while (response != password && !error){
 if (entryCount < entryLimit) {
  response = window.prompt("enter password");
  entryCount++;
 }else{
   error = true;
 }
}
if (error) {
 alert("too many entry")
}else{
 alert("you got it");
}


// for loops
var friends = ["Jae", "Blacktouch", "Tony"];

for (var i = 0; i < friends.length; i++){
document.write(friends[i] + "<br/>")
}


