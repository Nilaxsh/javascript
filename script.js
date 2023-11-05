
//function
function checkage(){
var age = prompt("Enter your age")
if (age>=18){
    document.getElementById("age").innerHTML=("you are old enough to drive")
}
else{
var left = 18-age
document.getElementById("left").innerHTML=("You are left with " + left + " years to drive.")
}
}
checkage();


//console
var age=40;
if(age>=18){
    console.log("you are older enough to drive")
}
else{
    var left=18-age;
console.log("your are left with"+left+"years to drive")
}


//question02
//function answer
 function checkhigh(yourage,myage){
var yourage = prompt("Enter your age")
var myage = 24
if(yourage>myage){
document.getElementById("first").innerHTML=("you are older than me")
}
else if(yourage<myage){
    
document.getElementById("second").innerHTML= ("you are" + (myage-yourage) +"younger than me")
}
else{
    document.getElementById("third").innerHTML=("we are sameage")
}
}
checkhigh();

//console
var yourage=24;
var myage=50;
if(yourage>myage){
    console.log("you are older than me")
}
else if(yourage<myage){
    console.log("you are"+(myage-yourage),"younger than me ")
}
else{
    console.log("same age")
}

// question3
// function answer
function greater(a, b) {
    if (a > b) {
      return `${a} is greater than ${b}`;
    } else {
      return `${a} is less than ${b}`;
    }
  }
  
  var a = 4;
  var b = 3;
  var result = greater(a, b);
  
  document.getElementById("fourth").innerHTML=(result);

//console answer
var a=4;
var b=3;
if(a>b){
    console.log("a is greater than b")
}else{
  console.log("a is less than b")
}

//qustion04
var marks = prompt("Enter your marks");
var grade;

if(marks>=80 && marks<=100){
    grade =" grade A"
}
else if(marks>=70 && marks<=79){
    grade = "B"
}
else if (marks>=60 && marks<=69){
    grade ="C"
}
else if(marks>=50 && marks<=59){
    grade ="D"
}
else{
    grade = "F"
}
document.getElementById("fiveth").innerHTML=(grade);


//console
var marks =prompt("your marks");
var grade;
if(marks>=80 && marks<=100){
       console.log("A")
    }
    else if(marks>=70 && marks<=79){
        console.log("B")
    }
    else if (marks>=60 && marks<=69){
        console.log("C")
    }
    else if(marks>=50 && marks<=59){
        console.log("D")
    }
    else{
        console.log("F")
    }


//question 05




