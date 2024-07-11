const coding=["js","ruby","java","python","cpp"]
 const values=coding.forEach((i)=>{
    // console.log(i);
    return i // it will still not return anything
})
//console.log(values);// here it does not return anything

//Note:-forEach does not return any value
const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((item)=>{
    item>4// it will return an empty array so we need to return it
    // return item>4;
})
console.log(newnums);