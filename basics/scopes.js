// function inside function

function one(){
    const username="sristy"
    function two(){
        const website="youtube"
        //console.log(username)
    }
    // console.log(website)
    two()
}
one()

//*******************interesting */
console.log(addone(6))
function addone(num){
    return num+1
}
console.log(addtwo(7))// this is not accesible bcz it has been declared differently
// it has also been stored in variable 
const addtwo=function(num){// expression and it can store many things like json ,objects etc
    return num+2
}
