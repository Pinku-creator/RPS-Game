let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg")
let userScoing=document.querySelector(".user-score")
let compScoing=document.querySelector(".comp-score")

const genCompChoice=()=>{
    const option=["rock","paper","scissor"]
    const ranIndx=Math.floor(Math.random()*3)
    return option[ranIndx];
}
let showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScoing.innerHTML=userscore
        msg.innerHTML=`Congratulations! 🥳 your ${userchoice} beats ${compchoice}.`
        msg.style.backgroundColor="#1aae36"
        
    }
    else{
        compscore++;
        compScoing.innerHTML=compscore
    msg.innerHTML=`You Lost! 😢 your ${userchoice} can't beat ${compchoice}.`
    msg.style.backgroundColor="#b11313"
}
}
let drawGame=()=>{
    msg.innerHTML="Game is Draw.🙃 Play again."
    msg.style.backgroundColor="#241bc6"
}
let playGame=(userchoice)=>{
    const compchoice=genCompChoice()
    if(userchoice===compchoice){
       drawGame()
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //comp- paper,scissor
            userwin=compchoice=== "paper" ? false:true;
        }
        else if(userchoice==="paper"){
            //comp- rock,scissor
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            //user-scissor, comp- rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

let choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id")
playGame(userchoice)
});
});
