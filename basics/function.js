function loginusermessage(username){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginusermessage())

// function with many  arguments
function calculatecartprice(...num1){ //... is spread and rest both operator but its differance depends upon its usecase
  return num1//A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
}
// console.log(calculatecartprice(7,8,89,9,67))


//function with object..................

const user={
    username:"sristy",
    price:849,
}
function handleobject(anyobject){
   // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user);
// we can do it even by passing objects directly int the function
handleobject({
    username:"samkk",
    price:"4556"
})

const arr1=[869,87,343,90]
function returnsecondvalue(getarray){
 return getarray[3]
}
console.log(returnsecondvalue(arr1))
