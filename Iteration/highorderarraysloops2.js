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
// but still if we want to return the values through  foreach only then we can use this:-
 const newnums =[]
 mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
 })
// console.log(newnums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const book=books.filter((book1)=>book1.genre=='Fiction')
//   console.log(book)

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
