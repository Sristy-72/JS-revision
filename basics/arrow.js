const user={
    username:"sristy",
    price:"989",
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);// this refers to the current context
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this); // this will give an empty object  because we are in a node enviornment


//function chai(){
   // let username="hitesh"
   // console.log(this.username);//  we cannot use this inside function w can use array inside objects only
//    console.log(this);
//}
//chai()

// const chai=function(){
//     let username="sristy"
//     console.log(this);
// }

// ARROW FUNCTION
const chai=()=>{
    let username="sristy"
    console.log(this);
}
// chai()


// basic syntax of arrow function
const addtwo=(num1,num2)=>{
    return num1+num2 // EXPLICIT RETURN
}
// console.log(addtwo(6,7))

//IMPLICIT  RETURN ARRAOW FUNCTION
 //const addTwo=(num1,num2)=> (num1+num2)//  () parenthesis is optional
 const addTwo=(num1,num2)=>({username:"sristy"})
 console.log(addTwo(4,8))


