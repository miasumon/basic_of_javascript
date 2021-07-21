
// PROJECT:07- STRING CONCATENATION
/*
var firstName="sumon ";
var lastName="Mia ";
document.write("my name is " + firstName+lastName);

var verb="is "
document.write("my name " + verb + "Sumon")


// PROJECT:08- LIBRARY FUNCTION FOR STRING


var text="Bangladesh";
var text=text.length;
document.write(text);



var sumon=prompt("Enter Your Name : ");
var sumon=sumon.charAt(2);
document.write(sumon);



var sumon="BANGLADESH";
var sumon=sumon.toLowerCase();
document.write(sumon);



var text1="Bangladesh ";
var text2=" is a beautiful country";
var sumon=text1.concat(text2);
document.write(sumon);


var firstName=prompt("Enter your first name: ");
var lasttName=prompt("Enter your last name: ");
var fullName=firstName+lasttName;
var len=fullName.length;
var Upper=fullName.toUpperCase();
var Position=fullName.charAt(2);
document.write("FULLNAME IS  : " + fullName + "  ; ;LENGTH IS: "+ len + " ; THE UPPERCASE IS: "+ Upper + " ; THE POSITION IS : " + Position);



// PROJECT-09ঃ ARITHMETIC && ASSIGNMENT OPERATOR

var x=5;
y=3;
sum=x ** y;
document.write(sum + "<br/>");

var m=6;

r= ++m;
r= m++;
r= m;


document.write(r + "<br>");

var j=5;
j= j %= 5;

document.write(j+ "<br>");

var num1=parseFloat(prompt("Enter first Num: "));
var num2=parseFloat(prompt("Enter Second Num: "));
result = num1 + num2;
document.write(num1 + " + " + num2 + "= " + result + "<br/>");
result = num1 - num2;
document.write(num1 + " - " + num2 + "= " + result + "<br/>");
result = num1 * num2;
document.write(num1 + " * " + num2 + "= " + result + "<br/>");
result = num1 / num2;
document.write(num1 + " / " + num2 + "= " + result + "<br/>");


// PROJECT-12 : Temperance Converting     

var faren = parseFloat(prompt("Enter Fahrenheit : "));
var cels=(faren-32)*(5/9);
document.write(" Celsius is : " + cels);


// PROJECT-12 : RELATIONAL & LOGICAL OPERATOR

//var num1=20;
//var num2=25;
//document.write(num1>=num2);

// document.write(num1<=num2);

//document.write(num1==num2);
//document.write(20==="20");
//document.write(20=="20");

//document.write(20!==19);
//document.write(20!==19);

//var num1=50;
//var num2=30;
//var num3=20;

//document.write(num1>num2 && num1>num3);

//document.write(num1>num2 || num1<num3);

//document.write(!(25==22));





// PROJECT-14ঃ IF , ELSE IF,ELSE :----


//Detecting Even or Odd program

var num = parseFloat(prompt("Number"));
if (num % 2 == 0)
document.write(" Even");

if (num % 2 != 0)
document.write("Odd");



//SHOWING letter GRADE TAKING INPUT FROM USER 



var num = parseFloat(prompt("Enter your Number to know your letter grade : "));

if (num > 100 || num < 0) 
  document.write(" Invailid Digit");

else if (num >= 80 && num <= 100)
  document.write("The grade is : A+");
  
else if(num >= 70 && num <= 79)
  document.write("The grade is : A");
  
  
else if(num >= 60 && num <= 69)
  document.write("The grade is : A-");

else if(num >= 50 && num <= 59)
  document.write("The grade is : B");
  
else if (num >= 40 && num <=49)
 document.write(" The grade is : C")


else if(num >= 33 && num <=39 )
  document.write("The grade is : D");

else
  document.write("The grade is : F");




// Detecting POSITIVE, NEGATIVE, ZERO Number

var num = parseFloat(prompt("Positive or NEGATIVE or ZERO "));

if (num > 0)
 document.write("Positive");
 
 else if (num < 0)
 document.write("NEGATIVE");
 
  else
 document.write("Zero");
 
 
 
 
 //Detecting Vowel or Consonant ---
 var letter = prompt("Enter Any letter : ");
letter= letter.toLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
document.write("Vowel");
else
document.write("Consonant");


//Detecting Large Number 
var num1 = parseFloat(prompt("Enter any Number"));
var num2 = parseFloat(prompt("Enter any Number"));
var num3 = parseFloat(prompt("Enter any Number"));

if( num1 > num2 && num1 > num3)
document.write(" Large Number : " + num1);

else if( num2 > num1 && num2 > num3)
document.write(" Large Number : " + num2);

else
document.write(" Large Number: " + num3);


// Converting Number to spelling from 1-9 using if conditional

var number = parseFloat(prompt("Enter Number"));

if (number == 0)
document.write("Zero");


else if (number == 1)
document.write("One");


 else if (number == 2)
document.write("Two");


 else if (number == 3)
document.write("Three");


 else if (number == 4)
document.write("Four");


 else if (number == 5)
document.write("Five");


 else if (number == 6)
document.write("Six");


else if (number == 7)
document.write("Seven");


 else if (number == 8)
document.write("Eight");

else
document.write("Invailid digit");



// Converting Number to spelling from 1-9 using switch conditional

var number = parseFloat(prompt("Enter Number"));

switch (number) {
  
  
  case 0:
    document.write("Zero");
    break;
    
  
  case 1:
  document.write("One");
    break;
    
  
  case 2:
  document.write("Two");
    break;
    
  
  case 3:
  document.write("Three");
    break;
    
  
  case 4:
  document.write("Four");
    break;
    
  
  case 5:
  document.write("Five");
    break;
    
  
  case 6:
  document.write("Six");
    break;
    
  
  case 7:
  document.write("Seven");
    break;
    
  
  case 8:
  document.write("Eight");
    break;
    
  case 9:
  document.write("Nine");
    break;
    
  
  default:
    document.write("Invalid Digit");
    
}

 
// Converting Number to spelling from 1-9 using switch conditional in a simple way

var letter =prompt("Enter Number");
letter = letter.toLowerCase();



switch(letter){
  
  case 'a' :
  case 'e' :
  case 'i' :
  case 'o' :
  case 'u' :
    document.write("Vowel");
    break;
    
  default :
  document.write("Consonant");
    
  
  
  
}



// PROJECT-18 : For Loop
var sum=0
for(x = 100; x >= 1; x=x-1){
  document.write(" " + x);
  
  sum= sum+x;
  
}
document.write(sum);



// addition between Two numbers using for Loop

var x = 1 ;

while ( x <= 3 ){
  
  var num1 = parseFloat(prompt("Enter first number"));
var num2 = parseFloat(prompt("Enter last number"));

result = num1 + num2;

document.write(" the result is : " + result);
  x = x + 1 ;
  
  
}



for( var x=1; x <= 3 ; x=x+1){
  
  var num1 = parseFloat(prompt("Enter first number"));
var num2 = parseFloat(prompt("Enter last number"));

result = num1 + num2;

document.write(" the result is : " + result);

  
}


// While Loop
var x = 2 ;
var sum = 0 ;
while(x<=100){
  
  document.write(" " + x);
  
  sum = sum + x ;
  
  x= x + 2;
  
  
  
}

document.write( "<br>" + " The sum is : " + sum);




// while loop program -----

var x = 1;
sum = 0 ;

while ( x <= 100){
  
  if ( x % 3 == 0 && x % 5 == 0){
    
      
  document.write( " " + x );
   sum = sum + x ;
    
    
  }
  
  
  x = x + 1;
  
}


document.write(" the sum is : " + sum);



// break and continue

for (var x = 1 ; x <= 100 ; x++){
 
  if (x % 2 !== 0){
    continue;
  }
  
  if (x == 20){
    break;
  }
  
  document.write(" " + x)
  
  
}



//Ternary OPERATOR

var num1 = Number(prompt("Enter First number"));
var num2 = Number(prompt("Enter 2nd number"));
var num3 = Number(prompt("Enter 3rd number"));

//num1 > 0 ? document.write("Positive") : document.write("NEGATIVE");

result = num1 > num2 && num1 > num3 ?  "large number" + num1 : num2 > num1 && num2 > num3 ? "large Number" + num2 : "large number " + num3;
document.write("result : " + result);

// do while loop 
var x = 1;
sum = 0 ;

do{
  
  if ( x % 3 == 0 && x % 5 == 0){
    
      
  document.write( " " + x );
   sum = sum + x ;
    
    
  }
  
  
  x = x + 1;
  
}
while(x <= 100);

document.write(" the sum is : " + sum);



//FUNCTION

//creating function
function addition (num1,num2){
result = num1 + num2;
  return result;

  
}

// calling function
var x = addition(5,6);
document.write("the result is : " + x + "<br>");
 var y = addition(10,20);
 document.write("the result is : " + y + "<br>");
 var z = addition(30,40);
document.write("the result is :" +z + "<br>");



//var num1 = 20;
//var num2 = 30;
//result = num1 + num2;
//document.write(" result is : " + result + "<br> ");


//var num1 = 40;
//var num2 = 50;
//result = num1 + num2;
//document.write(" result is : " + result);


// subtraction, multiplication & division using function.

function subtraction(num1, num2) {

sub = num1 - num2;


document.write ("the subtraction is : " + sub + "<br>");

}
subtraction(20,7);
subtraction(20,9);

function multiplication(num1, num2) {

mul = num1 * num2;


document.write ("the multiplication is : " + mul + "<br>");

}
multiplication(20,7);
multiplication(20,9);



function division(num1, num2) {

div = num1/num2;
 return div;
}
result = division(20,7);
document.write (" division is : " + result + "<br>");

result = division(20,9);

document.write (" division is : " + result);

// Array is an Object; collection of variables;
var names = ["Anis", "Rahim", "Karim", "jodu", "Kodu"];
var names2 = ["Minni", "Tinni","Ginni"];

document.write("<br>" + names.length);
document.write("<br>" + names);
document.write("<br>" + names[3]);

//.push library function to add value;
names.push("Sumon");
document.write ("<br>" + names.length);
document.write ("<br>" +names);

//  pop( ) is a library function to remove value from array;

names.pop();
names.pop();
names.pop();
document.write ("<br>" + names.length);
document.write ("<br>" +names);

CONCAT = names.concat(names2);
document.write ("<br>" + CONCAT.length);
document.write ("<br>" +CONCAT);


//loop in Array;

var numbers = new Array();

for ( x = 0; x<2; x++)
{
 numbers[x] = parseFloat(prompt("enter number "));
 
 
}




var sum = 0;



for (x = 0; x<numbers.length; x++){
  
  document.write(numbers[x] + "<br>");
sum = sum+ numbers[x];


}
document.write(" sum is : " + sum);



//shift method
var numbers = [1,2,3,4,5,6,7,8]

numbers.shift();

document.write(numbers.length + " <br> ");

document.write(numbers + "<br>");

numbers.unshift(90);
document.write(numbers.length + " <br> ");

document.write(numbers + "<br>");

// adding elements using splice--
numbers.splice(0, 0, 78,79);

document.write(numbers.length + "<br>");

document.write(numbers + "<br>");

var newarray = numbers.splice(5,3);
document.write(newarray.length + " <br> ");

document.write("splice is : " + newarray + "<br>");
var kodu = numbers.indexOf(90);
document.write("index is :" + kodu + "<br>");
var sortedNumbers = numbers.sort(function(a,b){
  return b-a;
});
document.write(sortedNumbers)



// Object is one kind of variable which can store multi types of value.


//creating constructor

function student (name, age, gpa, lang){
  this.NAME = name;
  this.AGE = age ;
  this.GPA = gpa ;
  this.LANG = lang ;
  
  // adding function in constructor
  
  this.ggg = function(){
    document.write(this.NAME);
    document.write(this.AGE);
    document.write(this.GPA);
    document.write(this.LANG);
  }
  
}

var studentr = new student(" Anis",20, 5.00,["Benglai","English"]);

var studentrr = new student("rahim",20, 5.00,["Benglai","English"]);

var studentrrr = new student("karim",20, 5.00,["Benglai","English"]);

studentr.ggg();

studentrr.ggg();


//Math Object
var mathObject = Math.ceil(2.4);
document.write(mathObject + "<br>");

var mathObject = Math.floor(2.4);
document.write(mathObject + "<br>");

var mathObject = Math.pow(2, 4);
document.write(mathObject + "<br>");

var mathObject = Math.ceil(2.4);
document.write(mathObject + "<br>");

var mathObject = Math.sin(2);
document.write(mathObject + "<br>");

var mathObject = Math.round(2.5);
document.write(mathObject + "<br>");

var mathObject = Math.max(30,40,50);
document.write(mathObject + "<br>");

var mathObject = Math.floor(Math.random() * 6);
document.write(mathObject + "<br>");

var num1 = parseFloat(prompt("Enter number to know maximum among 3 numbers"));

var num2 = parseFloat(prompt("Enter number to know maximum among 3 numbers"));

var num3 = parseFloat(prompt("Enter number to know maximum among 3 numbers"));

var maximum = Math.max(num1,num2,num3);
document.write("maximum is :" + maximum);



//Guessing  Game - 30
var x = 0;
var countWon = 0;
var countlost = 0;


do{
  
  

var guessNumber = parseFloat(prompt("Enter number from 1 to 5 to measure your intuition power"));

var randomNumber = Math.floor(Math.random() * 5 + 1);
if (guessNumber == randomNumber){
  document.write("You have won" + "<br>");
  countWon++;
}
else{
  
  document.write("You have lost!" + "<br>");
  countlost++;
}
  
  x++;
  
}
while(x <= 2);


document.write("you have won " + countWon + " times"+ "<br>");

document.write("you have lost " + countlost + " times");



// Date Object-31

var date = new Date();
document.write(date.getFullYear() + "<br>");

var date = new Date();
document.write(date.getDay() + "<br>");

var date = new Date();
document.write(date.getHours() + "<br>");

var date = new Date();
document.write(date.getDate() + "<br>");

var date = new Date();
document.write(date.getMonth() + "<br>");

var date = new Date();
document.write(date.getMinutes() + "<br>");


//DOM - document Object Model 32;


 document.querySelectorAll("h1")[1].innerHTML = "i am sumon";
 
 document.querySelectorAll("h1")[0].innerHTML = "i am josim";
 
 
 document.querySelectorAll("a")[0].innerHTML = "i am josim";
 
 document.querySelectorAll("li a")[0].innerHTML = "i am josim";
 
 document.getElementsByClassName("para1")[1].innerHTML = "i am Rahim";
 
 document.getElementsByTagName("p")[0].innerHTML = "i am kodu";


// EVENT HANDLER TO ONCLICK EVENT -----PROJECT-34

function button1(){
 var paragraph = document.querySelector("#p");
 paragraph.innerHTML = "you have clicked on button1"
  
}


function button2(){
 var paragraph = document.querySelector("#p");
 paragraph.innerHTML = "you have clicked on button2"
  
}



//More on DOM -35;

//creating element
var myDiv = document.querySelector("#my-div");
var myHeading1 = document.querySelector("#heading1");


var heading4 = document.createElement("h1");
var text = document.createTextNode("heading4");
heading4.appendChild(text);

myDiv.insertBefore(heading4, myHeading1);

myDiv.removeChild(myHeading1);

heading4.style.color = "green";
heading4.style.fontSize = "3rem";
heading4.style.textDecoration = "underline";
heading4.style.background = "red";
heading4.style.padding = " 30px 50px ";
heading4.innerHTML = "hello sumon";



//IMAGE SLIDER ;

var VarImg = document.querySelector("img");
var photos = ["banner.jpeg", "banner2.jpg"]
var count = 0;
function pre(){
  
  count--;
  if(count < 0){
    count = photos.length - 1;
    VarImg.src = photos[count];
  }
  else{
      VarImg.src = photos[count];
  }
  
  
}


function next(){
  
  count++;
  if(count >= photos.length){
    count = 0;
    VarImg.src = photos[count];
  }
  else{
      VarImg.src = photos[count];
  }

  
  
  
}


//CHANGING CSS STYLE -37
var myVar = document.querySelector("#para");

function addStyle(){
myVar.classList.add("para-style");
  
  
}
function removeStyle(){
myVar.classList.remove("para-style");
  
}

//ADDEVENTLISTENER -PROJECT-38

var myVar = document.querySelector("button");
myVar.addEventListener("click", function(){
  alert("hi sumon");
});

var VarPara = document.querySelector("p");

VarPara.addEventListener("mouseover", function(){
  VarPara.classList.add("para-style");
})

VarPara.addEventListener("mouseout", function(){
  VarPara.classList.remove("para-style");
})


// addEventListener with multiple elements PROJECT-39


for (x = 0 ; x < 3 ; x++){
  
  
document.querySelectorAll(".myButton")[x].addEventListener("click", function(){
  
var text =  this.innerHTML;
  
  document.querySelector("h1").innerHTML = text + " is clicked ";
});
  
  
}


// Audio Play PROJECT-40
for(x = 0; x<3 ; x++){
  
  document.querySelectorAll(".myButton")[x].addEventListener("click", function(){
  var text = this.innerHTML;
  
  audioPlay(text);
  playAnimation(text);
  

  
  
  
});
  
}

function audioPlay(text){
  
    
switch (text) {
  
  case 'a':
    var audio = new Audio("1.mp3");
    audio.play();
    break;
  case 'b':
    var audio = new Audio("2.mp3");
    audio.play();
    break;
  case 'c':
    var audio = new Audio("1.mp3");
    audio.play();
    break;
  
  
  default:
    // code
}
  
}

function playAnimation(text){
  var selectedAnim = document.querySelector("." + text);
  selectedAnim.classList.add("anim");
  
  setTimeout(function() {
    selectedAnim.classList.remove("anim")
    
  }, 1000);
  
  
}


document.addEventListener("keypress",function(event){
  
  var text = event.key;
  audioPlay(text);
  playAnimation(text);
  
});



var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
  count++;
var text = event.key;
  
  
  document.querySelector("p").innerHTML = "you have pressed" + text;
  
  
  
});



// Error handling = try, catch,finally
try{
  
alert("hi");
alert(x);
alert("bye");

  
}catch(error){
  
  console.log(error);
  
  
}finally{
  
alert("bye");

  
  
}

// error handling throw -PROJECT-44

document.querySelector("button").addEventListener("click", function(){
  
 var varInput = document.querySelector("input");
  
var num =  varInput.value;

  if(num < 5){
    throw "your number is too low" ;
    console.log(num);
  }
  else if(num > 10){
    throw "your number is too high" ;
    
  }
  else{
    console.log("thank you for pressing the right value")
  }
  
});



// Canvas -html tag = PROJECT-45

var c =document.querySelector("canvas");
var ctx = c.getContext("2d");

ctx.lineWidth = "3px";
ctx.fillStyle = "green";
ctx.fillRect(10,10,380,280);

ctx.strokeStyle = "black";
ctx.strokeRect(9,9,382,282);

var centerX = c.width/2;
var centerY = c.height/2 ;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0, 2*Math.PI ,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke;
ctx.strokeStyle = "black";




//Variable & function declaration in Es6

let x = 6;
if (true){
  var x = 5 ;
}
console.log(x);

let y = 6;
if (true){
  let y = 5;
}
console.log(y);

const z = 6 ;
if(true){
  const z = 7;
}

console.log(z);


//CONCATENATION
let m = 10;
let n = 20;
let sum = m + n;
console.log(`sum is ${sum}  the end`);

let name = "sumon";
let message = "I am ";
let fullName = `${message} ${name}`;
console.log(`${fullName}`);


//Es6 function declaration

const addNumbers = (a,b) =>{
  
  let result = a+ b;
  console.log(`${result}`);
  
};
addNumbers(5,10);


// Hoisting & Strict Mode- PROJECT-47

x = 10;
console.log(x);
var x ;

y = 10;
console.log(y);
let x ;

z = 10;
console.log(z);
const z ;




//strict mode 
"use strict";
x = 10;
console.log(x);


//default & rest parameter
let printText = (text = "this is default parameters") =>{
  console.log(text);
};
printText();
printText("hi sumon");

//rest parameter

let printNumbers = (x,y, ...z)=>{
  console.log(`x = ${x} ,  y = ${y} ,  z = ${z}`);
  
  
};
printNumbers(10,20,30,40,50);



// Spread Operator > concat, push
let numbers1 = [1,2,3];
let numbers2 = [4,5,6];
//let p = numbers1.concat(numbers2);
//using spread operator for concatenation
let p = [...numbers1,...numbers2];
console.log(p);

function addNumbers (x,y,z){
  return x+y+z;
};
let numbers = [10,20,30];
//console.log(addNumbers(numbers[0],numbers[1],numbers[2]));

console.log(addNumbers(...numbers));

let p1 = {
  name : "sumon",
  age : 20
};
let p2 ={
  nationality : "Bangladeshi ",
  occupation : "student"
};

let s = {...p1,...p2};
console.log(s);



//Object literals - PROJECT-50
function studentinfo(name,age){
  return{
    //name:name,
   // age:age
   
   name,
   age
   
  };
};
var s = studentinfo("sumon",20);
console.log(s);


let message = {
 // body : function(){
 //   return 'i am object function';
//  }
  //concise mehtod
  'body name'(){
    return 'i am object' ;
  }
  
  
  
};

console.log(message['body name']());



// for of and for in 51

        const names = ["s1","s2","s3"];
     //   for (x = 0; x<names.length; x++){
       //  var result = names[x];
         //console.log(result);
      //  }

for ( let x in names){
  console.log(names[x]);
}

// for in

let students = {
  name : "sumon",
  age : 20,
  id : 101,
  GPA : 5.00
};

for ( let x in students){
  console.log(`${x} : ${students[x]}`);
  
  
}


//for vs forEach = 52
//In a traditional way

let numbers1 = [10,20,30,40];
for (let x = 0 ; x < numbers1.length ; x++){
   console.log(numbers1[x]);
}

// the same thing in   forEach way
var x;
let numbers2 = [1,2,3,4,5];

let newNumbers = [];
//numbers2.forEach(myFunction);

//function myFunction(x){
 //console.log(x);
//}
numbers2.forEach(function(x, sumon, karim){
karim[sumon] = x + 5;
});
console.log(numbers2);



// map and filter function which return the vlaues in a new array;
let numbers = [10,20,30,40];
let squareNumbers = numbers.map(function(x){
  return x*x ;
});
console.log(squareNumbers);

let students = [
  {
    name : "sumon",
    id : 101,
    gpa : 3.22 
  },
  {
    name : "jukon",
    id : 102,
    gpa : 2.06
  },
  {
    name : "rukon",
    id : 103,
    gpa : 2.55
  },
  {
    name : "rokeya",
    id : 104,
    gpa : 4.67
  }
  
  
  ];
  
let newNames = students.filter(function(x){
 return x.gpa > 3;
}).map(function(y){
return  y.name ;
});


// Arrow function of es6 with map and filter function= 55;
function add1 (num1,num2){
  
  return num1 + num2;
}

const add2 = (num1,  num2) =>{
  
  return num1 + num2;
}



console.log(add1(10, 20));
console.log(add2(20, 20));


let students = [
  {
    name : "sumon",
    id : 101,
    gpa : 3.22 
  },
  {
    name : "jukon",
    id : 102,
    gpa : 2.06
  },
  {
    name : "rukon",
    id : 103,
    gpa : 2.55
  },
  {
    name : "rokeya",
    id : 104,
    gpa : 4.67
  }
  
  
  ];
  
  const myFunction = () => {
    
//  return students.filter(function(x){
 //  return   x.gpa > 3 ;
      
    return students.filter((x) =>  x.gpa > 3 ).map((y) =>{
      return y.name;
    })
    
    
    //(function(y){
     // return y.name
    //})  
     
      
    
    
    
  };
  
  console.log(myFunction());
  
  
  
  
  // Desttructuring array and objects - 56
  
  let numbers = [10,20,30,40,50,]
  
  // array Desttructuring
  let [num1, num2, num3, num4, num5] = numbers;
  console.log(num5)
  // objects Desttructuring
  
let studentInfo = {
  name : "anis",
  id : 101,
  gpa : 3.5,
  lang : {
    native : "b",
    sss : "k"
  }
  
};
//console.log(studentInfo.id)
//console.log(studentInfo.name);
//console.log(studentInfo.gpa);
//let {name,id,gpa,lang} = studentInfo;
//console.log(id);
//console.log(lang.native);


const details = (studentInfo) => {
  console.log(`${name},${id}`)
}
let {name,id,gpa,lang} = studentInfo
details(studentInfo);


// array methods | find()| findIndex
//find()

let numbers = [10,20,30,43,50,];



//let firstOddNumber = numbers.find(oddNumber);
let firstOddNumber = numbers.find((x) => x%2 !== 0)
//let firstOddNumberIndex = numbers.findIndex(oddNumber);

console.log(firstOddNumber);
//console.log(firstOddNumberIndex);


// string method = 58
let text = "Today is Friday "
//var sumon=text.startsWith("Today")
console.log(text.endsWith(" Friday "))

console.log(text.includes(" array"))

// Es6 Modules & Classes = 59

//import {text} from 'module.js' ;

//console.log(text);

// Class
class Student {
  constructor (id, name){
    this.id = id
    this.name = name
    
      this.display = function(){
    console.log(this.id)
    console.log(this.name)
    
  }

  }
set studentName(name){
  this.name = name ;
}

get studentInfo(){
  return this.name + " " + this.id
    
    
  }
  
  
  
}

let s1 = new Student (101, "sumon")
console.log(s1)
s1.studentName = "lalaala"
s1.studentInfo;

// Synchronous and asynchronous

let taskOne = () => {
  console.log("Task One")

}


let taskTwo = () => {
setTimeout(() => {
  console.log("task Two")
},5000)

}

let taskThree = () => {
  console.log("Task three")

}

let taskFour = () => {
  console.log("Task Four")

}

let taskFive = () => {
  console.log("Task Five")

}
taskOne();
taskTwo();
taskFour();
taskThree();
taskFive()

// Higher Order Function, callback

//let higherOrderFunction = (num, callback) => {
//  callback(num)
  
  
//}

//let square = (x) => {
  //console.log(`the square of ${x} = ${x*x}`)
//}
//square(4)
//higherOrderFunction(6,square)


let taskOne = (callback) => {
  console.log("Task One") 
  callback();

}


let taskTwo = (callback) => {
setTimeout(() => {
  console.log("task Two")
  callback()
},2000)

}

let taskThree = (callback) => {
  console.log("Task three")
  callback()

}

let taskFour = (callback) => {
  console.log("Task Four")
  callback()

}

let taskFive = () => {
  console.log("Task Five")
  

}
taskOne(() => {
  taskTwo(()=>{
    taskThree(()=>{
      taskThree(()=>{
        taskFour(()=>{
          taskFive()
        })
      })
    })
  });
});



// promise part - 1- project - 62

//creating promise object
const promise1 = new Promise ((resolve,reject) => {
  let completedTask1 = false;
  if(completedTask1){
    resolve('task 1 is completed')
  }else{
    reject('task 1 is not completed')
  }
})

const promise2 = new Promise ((resolve,reject) =>{
  let completedTask2 = true;
  if(completedTask2){
    resolve('task 2 is completed')
  }else{
    reject('task 2 is not completed')
  }
})

//Promise.all( [promise1 ,  promise2] ).then(([res1, res২]) => {
  //console.log(res1)
//})


promise1.then((res) => {
  console.log(res)
}).catch((err) =>{
  console.log(err)
})
promise2.then((res2) => {
  console.log(res2)
})


// promise part-2 - project 63

const taskOne = () => {
  return new Promise ((resolve,reject) => {
    resolve('taskOne is completed')
  })
}

const taskTwo = () => {
  return new Promise ((resolve,reject) => {
    reject('taskTwo is not completed')
  })
}

const taskThree = () => {
  return new Promise ((resolve,reject) => {
    resolve('taskThree is completed')
  })
}

const taskFour = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
          resolve('taskFour is completed')
    },2000)

  })
}
taskOne()
.then((res) =>{
  console.log(res)
})
.then(taskFour)
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.catch((err) => {
  console.log(err)
})


console.log(document.head)
/////////
var hideContent = document.querySelector(".content");
hideContent.style.display = "none";

var hideContent_2 = document.querySelector(".content_2");
hideContent_2.style.display = "none";


function myFunction() {
for(var x =0; x<3 ; x++){
  var click = document.querySelectorAll("#btnn")[x].addEventListener("click",()=>{

  hideContent.style.display = "block"
  });
  
  
}

}

*/
// object of array

var players = [10,20,30,40,50];
console.log(players[2])


  