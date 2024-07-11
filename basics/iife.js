// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)
// some times there is an issue with the pollution of global scope variables, to avoid that we use iife
(function chai(){
    // named iife
    console.log(`db connected`);
})();// here we will use semicolon to stop the context 
// ()()

((name)=>{
    console.log(`db connected two ${name}`)
})("sristy")

