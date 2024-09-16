let boxess=document.querySelectorAll(".box");
let heading=document.querySelector(".heading");
let winnermsg=document.querySelector(".winnermsg");

let reset=document.querySelector(".reset");

let msg=document.querySelector(".msg");

winnermsg.classList.add("hide");

let winnerarr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let turn0=true;
let winner=false;
boxess.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
       
    })
    
    
})

function checkWinner(){

for(let pattern of winnerarr){
    let [a,b,c]=pattern;
  
if(boxess[a].innerText!=="" && 
    boxess[a].innerText==boxess[b].innerText &&
     boxess[b].innerText==boxess[c].innerText)
     {
     msg.innerText="Winner is "+boxess[a].innerText;
    winnermsg.classList.remove("hide");
     winner=true;
} 
}
if(winner){
    boxess.forEach(
        (box)=> {
            box.disabled=true;
        }
        
    )
}
}

reset.addEventListener("click",() => {
    turn0=true;
    winner=false;
    winnermsg.classList.add("hide");
    boxess.forEach(
        (box)=>{
        box.innerText="";
        box.disabled=false;
    })
        
})
let newgame=document.querySelector(".new");
newgame.addEventListener("click",() => {
    turn0=true;
    winner=false;
    winnermsg.classList.add("hide");
    boxess.forEach(
        (box)=>{
        box.innerText="";
        box.disabled=false;
    })
        
})
