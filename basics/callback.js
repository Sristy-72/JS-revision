function square(n){
    return n*n;
}
function sumofsquare(a,b){
    const val1=square(a);
    const val2=square(b);
    return val1+val2;
}
const ans=sumofsquare(5,6);
console.log(ans)
