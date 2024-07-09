let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userSc = document.querySelector("#you");
const compSc = document.querySelector("#comp");
const resetBt = document.querySelector("#reset");
const newBt = document.querySelector("#new-gm");
const choices = document.querySelectorAll(".choice");
const mesgCont = document.querySelector(".msg-content");
const mesg = document.querySelector("#message");

const getCompCh = () => {
    const options = ["Rock","Paper","Scissors"];
    const randId = Math.floor(Math.random() * 3);   //it will generate random number from 0 to 2
    return options[randId];
};

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin,userCh,compCh) => {
    if(userWin){
        console.log("You Won");
        msg.innerText = `You Won! Your ${userCh} beats ${compCh}`;
        msg.style.backgroundColor = "blue";
    }
    else{
        console.log("You Lost");
        msg.innerText = `You Lost. ${compCh} beats your ${userCh}`;
        msg.style.backgroundColor = "red";
        
    }
};

const disableCh = () => {
    for(let choice of choices){
        choice.disabled = true;
    }
};

const playGame = (userCh) => {
    console.log("User choice = ",userCh);
    const compCh = getCompCh();
    console.log("comp choice = ",compCh);
    userCh.innerText = `User choice: ${userCh}`;
    compCh.innerText = `Computer choice: ${compCh}`;
    if(userCh === compCh){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userCh === "Rock" ){
            userWin = compCh === "Paper" ? false:true;
            userWin = compCh === "Scissors" ? true:false;
        }
        else if(userCh === "Paper"){
            userWin = compCh === "Rock" ? true:false;
            userWin = compCh === "Scissors" ? false:true;
        }
        else{
            userWin = compCh === "Rock" ? false:true;
            userWin = compCh === "Paper" ? true:false;
        }
        if(userWin){
            userScore++;
            userSc.innerText = userScore;
            if(userScore === 11 ){
                mesg.innerText = "Congratulations! You won";
                mesgCont.classList.remove("hide");
                disableCh();
            } 
        }
        else{
            compScore++;
            compSc.innerText = compScore;
            if(compScore === 11 ){
                mesg.innerText = "Oops! You lost";
                mesgCont.classList.remove("hide");
                disableCh();
            }
        }
        showWinner(userWin,userCh,compCh);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userCh = choice.getAttribute("id");
        // console.log("clicked",userCh);
        playGame(userCh);
    });
});

const resetGame = () =>{
    userScore = 0;
    userSc.innerText = userScore;
    compScore = 0;
    compSc.innerText = compScore;
}

resetBt.addEventListener("click",() =>{
    resetGame();
});

newBt.addEventListener("click",() =>{
    resetGame();
    mesgCont.classList.add("hide");
});