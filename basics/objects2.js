const tinderuser=new Object()
// const tinderuser={}
tinderuser.name="djkejdie"
tinderuser.id="hde"
tinderuser.isloggedin=false
// console.log(tinderuser)
const regukaruser={
    email:"srysuhh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sristy",
            lastname:"mejreya"
        }
    }
}
//console.log(regukaruser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
// we willl use spread method
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)
// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

const users=[{// this is used in large production from the databases
    id:"hswh",
    email:"shush@gmail.com"
},
{
    id:"hswh",
    email:"shush@gmail.com"
},
{
    id:"hswh",
    email:"shush@gmail.com"
}
]
users[1].email// we can access it like this
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


// when looping through the object it is possible that sometimes the element is present so it can crash
// so it is beeter that we ask first wheather that element is present or not

console.log(tinderuser.hasOwnProperty('isloggedin'))
console.log(tinderuser.hasOwnProperty('islogged'))
