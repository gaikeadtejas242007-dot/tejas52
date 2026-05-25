let button=document.getElementsByClassName("btn");
let wintext=document.getElementsByClassName("wintext");
let turnA=true;
for(let i=0;i<button.length;i++){
  button[i].addEventListener("click",function(){
    console.log("clicked");
    if(turnA){
      button[i].innerHTML="X";
      turnA=false;
    }
    else{
      button[i].innerHTML="O";
      turnA=true;
    }
    button[i].disabled=true;
    checkWinner();
});
}
const winners=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

]
checkWinner=()=>{
  for(let i=0;i<winners.length;i++){
    let [a,b,c]=winners[i];
    if(button[a].innerHTML!=="" && button[a].innerHTML===button[b].innerHTML && button[a].innerHTML===button[c].innerHTML){
      console.log("winner is the "+button[a].innerText);
      stoptax();
      showwinner(button[a].innerText);

      
      return;
    }
  }
}
stoptax=()=>{
  for(let i=0;i<button.length;i++){
    button[i].disabled=true;
  }
}

let restart=document.getElementById("restart");
console.log(restart);
restart.addEventListener("click",()=>{
  for(let i=0;i<button.length;i++){
    button[i].innerHTML="";
    button[i].disabled=false;
    wintext[0].innerHTML="";
  }   
})
showwinner=(winner)=>{
  wintext[0].fontSize="30px";
  wintext[0].innerHTML="Congratulations the winner is the  "+winner;
}


let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
  for(let i=0;i<button.length;i++){
    wintext[0].innerHTML="";
     button[i].innerHTML="";
     button[i].disabled=false;
  }
})
