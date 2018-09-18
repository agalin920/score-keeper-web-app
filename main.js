//Select the DOM element
var p1Button = document.querySelector('#p1Button');
var p2Button = document.querySelector('#p2Button');
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");
var resetButton = document.querySelector('#resetButton');
var limitInput = document.querySelector("input");

var gameOver=false;
var scoreLimit= document.querySelector("#scoreLimit");

//Add function to the onclick property
p1Button.onclick=function(){
    if(!gameOver){
        let currScore = Number(p1Score.textContent);
        if(currScore + 1 === Number(scoreLimit.textContent)){
            gameOver=true;
            p1Score.classList.add("win-text");
        }
        p1Score.textContent=String(++currScore);
    }
};

p2Button.onclick=function(){
    if(!gameOver){
        let currScore = Number(p2Score.textContent);
        if(currScore + 1 === Number(scoreLimit.textContent)){
            gameOver=true;
            p2Score.classList.add("win-text");
        }
        p2Score.textContent=String(++currScore);
    }
};

resetButton.onclick=function(){
    gameOver=false;
    p1Score.classList.remove("win-text");
    p2Score.classList.remove("win-text");
    p1Score.textContent="0";
    p2Score.textContent="0";

}

limitInput.onchange=function(){
    scoreLimit.textContent = limitInput.value;
}