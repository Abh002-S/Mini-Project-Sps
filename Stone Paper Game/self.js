let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    //rock paper scissors
    const option =["rock","paper","scissors"];
    const  randidx=Math.floor(Math.random()*3);
    return option[randidx];
}

const drawgame=()=>{
 msg.innerText="Game was Draw .play again."
 msg.style.backgroundColor="#081b31";
}

const showwinner=(userwin)=>{
 if(userwin){
    userscore++;
   userscorepara.innerText=userscore;
    msg.innerText="you win!";
    msg.style.backgroundColor="green";
 } else{
   compscore++;
   compscorepara.innerText=compscore;
    msg.innerText="you loose!";
    msg.style.backgroundColor="red";
 }

}
const playgame =(userchoice)=>{
    
    console.log("choice was clicked",userchoice);
    
    //generate compute choice 
    const compchoice=gencompchoice();
    console.log("comp choice =",compchoice);

 if(userchoice===compchoice){
    //draw game
    drawgame();

 }
 else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
       userwin: compchoice==="scissors"?false:true
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showwinner (userwin);
 }

}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id") ;
      playgame(userchoice);
    })
})