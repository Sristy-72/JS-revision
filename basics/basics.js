// to start a blank page ,type about:blank in a browser
// variables are the containers for storing the data(storing data values)
// we can declare a variable by using these keywords.
 // it is reccomended to use let instead of var.however 
//  ,there are some browser which do not support let.
//1.variable names must start with either a letter ,an underscore
// or dollar sign 
let s=7;
const u=Number(s);
console.log(typeof u); // fn for renaming the variable
// let firstname, lastname;
var f=987;
let a=89;
let b=67;
console.log(a>b);
console.log(a<b);
console.log("sristy");
console.log("hello","sristy",b,(1+6));
console.log("sum is:", a+b);
let  pencilprice=34;
let eraserprice=4;
// let output= "the total price is :"+(pencilprice+eraserprice) + " rupees";
// console.log("Total sum is:", pencilprice+eraserprice);

let output=`the total price is : ${pencilprice} rupees`;// backticks
console.log(output);
let age=23;
console.log("before if statement");
if(age>=18){
    console.log("you can drive");

}
console.log("After if statement");
 
// create a traffic light system that shows what to do based on color
let color="red";
if( color=="red"){
    console.log("you need to stop");
}
if (color=="yellow"){
    console.log("you need to be alert");
}
if(color=="green"){
    console.log("you can go");
}
let str="apple";
if( str[0]=="a" && str.length>3){
    console.log("good string");
}
else 
console.log("not  a good string");
let num=-10;
if(num){
    console.log("num is not equal to 0");

}
else 
console.log("num is equal to 0");


// let rang="red";
// switch(rang){
//     case"red":
//     console.log("stop");
//     break;
//     case"yellow":
//     console.log("slow down");
//     case"green":
//     console.log("go");
//     break;
//     default:
//     console.log("light broken");
// }

let day=7;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thursday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
        console.log("satarday");
        break;
        case 7:
        console.log("sunday");
        break;
        default:
            console.log("not valid");
}
// alert("something is wrong");
console.error("this is an error message");
console.warn("this is warning message");

// let name=prompt("what is your name?");
// console.log(name);
// let firstname=prompt("what is your firstname?");
// let lastname =prompt("what is your lastname?");
// let final=(firstname+lastname);
// console.log(final);


var g=80;
if(g%10==0){
    console.log("good");
}
else
console.log("bad");
// let name=prompt("what is your name");
// let Age=prompt("what is your age");
// alert( ` ${name} is ${Age} years old`);


let quarter=3;

switch(quarter){
case 1:
    console.log("jan,feb,mar");
    break;
case 2:
    console.log("april,may,jun");
    break;
case 3:
    console.log("jul,aug,sep");
    break;
case 4:
    console.log("oct,nov,dec");
    break;
}


let str2="applet";
if((str2[0]=="a" || str2[0]=="A") && str2.length>5){
    console.log("golden");
}
else
console.log("not golden");


let i=7;
let h=8;
let j=6;
if(i>h && i>j){
    console.log("i is greater");
}
if(h>i && h>j){
    console.log("h is greater");
}
else 
console.log("j is greater");
