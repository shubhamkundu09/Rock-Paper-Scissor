let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-cont h2");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randindex = Math.floor(Math.random()*3);
    return options[randindex];
}

const drawgame = ()=>{
        msg.innerText = "GAME IS DRAW"
        msg.style.backgroundColor = "black"
}

const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        us.innerText = userscore
        msg.innerText = `YOU WIN`
        msg.style.backgroundColor = "green"
    }else{
        compscore++;
        cs.innerText = compscore;
        msg.innerText = `COMPUTER WIN`
        msg.style.backgroundColor = "red"

    }
}

const playgame = (userchoice) => {

    const compchoice = gencompchoice()
 

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false:true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false:true;
        }else{
            compchoice === "rock" ? false: true
        }
        showwinner(userwin)
    }
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})
