const mysym=Symbol("key1")
const jsuser={
    name:"sristy",
    age:18,
    state:"bihar",
    isLoggedIn:"yes",
    [mysym]:"mykeys1"
}
console.log(jsuser.age)
console.log(jsuser["name"])// its good practice
console.log(typeof (jsuser[mysym]))
