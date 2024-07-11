// for of
// ["","".""] ->strings
// [{},{},{}]


// for array
const arr=[1,2,3,4,5]
 for(const i of arr){
    //  console.log(i);
 }

 // for strings

 const greet="hello world!"
 for(const i of greet ){
   //  console.log(`every char in greet is ${i}`);
 }

 // map :- it is known for its unique value it is similar to key value pair 

 const map=new Map()
 map.set('IN',"india")
 map.set('USA',"united states of america")
 map.set('FR',"france")
// console.log(map)
for(const key of map){
   // console.log(key)
}
for(const [key,value] of map){// destructuring of array
    //console.log(key ,':-',value)
}

const myobj={
   name:"sristy",
   course:"webdev",
   state:"bihar"
}
//for(const [i,value] of myobj){
  // console.log(i,":-",value)// we cannot iterate through object using for of loop
//}


const myobj2={
   js:"javascript",
   cpp:"c++",
   rb:"ruby",
   swift:"swift by apple"
}
for (const key in myobj2) {
    //  console.log(key);
      
   }

   for(const i in myobj2){
      //console.log(`${i} is shortcut for ${myobj2[i]} `);
   }

   // can we apply forin loop on arrays??
   const lang=["js","cpp","java","python"];
   for(const i in lang){
     // console.log(i)// it will directly give the key not the value
   //   console.log(lang[i])
   }
   
   // can we apply forin loop on map also??
   const map2=new Map()
   map2.set('IN',"india")
 map2.set('USA',"united states of america")
 map2.set('FR',"france")
 for(const i in map2){
   //console.log(i)// it is not iterable
 }



 //FOR-EACH LOOP
const coding=["js","cpp","java","python"]
coding.forEach(function(items){
   // console.log(items);
})

// forEach loop using arrow function

coding.forEach((val)=>{
   // console.log(val);
})

function printme(item){
   // console.log(item);
}
// coding.forEach(printme)// here we will not pass the reference(printme()) we will only pass the name


coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
})
 const mycoding=[
{
   name:"javascript",
   filename:"js"
},
{
   name:"javascript",
   filename:"js"
},
{
   name:"javascript",
   filename:"js"
}
 ]
 mycoding.forEach((item)=>{
   console.log(item.filename);
 })
