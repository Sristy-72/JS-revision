const isstatus=document.querySelector("h3")
const addfriend = document.querySelector("#add")
const remove =document.querySelector("#remove")

var flag =0;
addfriend.addEventListener("click", function(){
    if(flag == 0){
        isstatus.innerHTML="Friends"
         isstatus.style.color="green"
         flag++;
         addfriend.innerHTML="Remove"
    }
    else{
        isstatus.innerHTML="Stranger"
        isstatus.style.color="red" 
        flag--;
        addfriend.innerHTML="Add friend"
    }
  
})
// remove.addEventListener("click", function(){
//     isstatus.innerHTML="Stranger"
//     isstatus.style.color="red"
// })
