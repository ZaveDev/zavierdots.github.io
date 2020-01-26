//This caches the DOM with the neccessary refference points
let userScore = 0;
let compScore = 0;
let compHP = 100;
let userHP = 100;
const userScore_span = document.getElementById('userScore');
const compScore_span = document.getElementById('compScore');
const userHP_div = document.getElementById('userHP');
const compHP_div = document.getElementById('compHP');
const userRoll_div = document.getElementById('userRoll');
const compRoll_div = document.getElementById('compRoll');
const scoreBoard_div = document.querySelector('.scoreBoard');
const scoreBoard_di = document.getElementById('scoreBoard');
const background_body = document.getElementById('back')
const userSelection_div = document.getElementById('userSqur');
const compSelection_div = document.getElementById('compSqur');
const levelButton_div = document.getElementById('level');
const result_p = document.querySelector('.result > p');
const result_div = document.getElementById('result2');
const sword_div = document.getElementById("sw");
const magic_div = document.getElementById("ma");
const shield_div = document.getElementById("sh");
const reset_div = document.getElementById("reset");
const choices = ['sw','ma','sh'];
let out_v = "";


//This is the function that envokes computer choice
function compuChoice() {
    const randomNumber = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    return choices[randomNumber];
}
function compuChoice2() {
    const randomNumber = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
    return randomNumber;
}
function userChoice2(){
    const randomNumber = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
    return randomNumber;
}
//This function displays image of the computers choice 
function computerImage(Y){
    if (Y == "sw") 
    return compSelection_div.innerHTML = '<img src="assets/css/images/sword.png" alt="Sword" height="50" width="50"></img>';
    if (Y == "ma") 
    return compSelection_div.innerHTML = '<img src="assets/css/images/magic.png" alt="Magic" height="50" width="50"></img>';
    if(Y == "sh")
    return compSelection_div.innerHTML = '<img src="assets/css/images/shield.png" alt="Shield" height="50" width="50"></img>';
}

//This funtion changes the userChoice and compChoice into human readable words
function convertToWord(X) {
    if (X === "sw") return "Sword";
    if (X === "ma") return "Magic";
    return "Shield"
}

//Change border color
function winBorder(){
    scoreBoard_di.classList.add("winBorder");
    setTimeout(function(){scoreBoard_di.classList.remove("winBorder");}, 600);
}
function drawBorder(){
    scoreBoard_di.classList.add("drawBorder");
    setTimeout(function(){scoreBoard_di.classList.remove("drawBorder");}, 600);
}
function loseBorder(){
    scoreBoard_di.classList.add("loseBorder");
    setTimeout(function(){scoreBoard_di.classList.remove("loseBorder");}, 600);
}

//The next 3 functions are what happens when you Win, Lose, or Draw
//Win results
function winSword(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your " + convertToWord(userChoice) + " is faster than your enemy's " + convertToWord(compChoice) + ". You win!";
    winBorder()
}

function winMagic(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your " + convertToWord(userChoice) + " burns through your enemy's " + convertToWord(compChoice) + ". You win!";
    winBorder()
}

function winShield(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your " + convertToWord(userChoice) + " deflected your enemy's " + convertToWord(compChoice) + ". You win!";
    winBorder()
}

//Draw results
function drawSword() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your swords spark as they clash each other. It's a draw!";
    drawBorder()
}

function drawMagic() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Both of you cast fireball and they hit each other. It's a draw!";
    drawBorder()
}

function drawShield() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your shields crash into each other. It's a draw!";
    drawBorder()
}

//Lose results
function loseSword(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your enemy's " + convertToWord(compChoice) + " deflected your " + convertToWord(userChoice) + ". You lose...";
    loseBorder()
}

function loseMagic(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your enemy's " + convertToWord(compChoice) + " is faster than your " + convertToWord(userChoice) + ". You lose...";    
    loseBorder()
}

function loseShield(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Your enemy's " + convertToWord(compChoice) + " burned through your " + convertToWord(userChoice) + ". You lose...";
    loseBorder()
}



function goToLevel2(){
    let XS = userScore;
    let SX = compScore;
    if (XS == 5) {
        levelButton_div.classList.add('levelButton');
        levelButton_div.innerHTML = '<a href="step2.html">level2</a>';
    }
    if (SX == 5) {
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = "Who is gonna win?";
        userSelection_div.innerHTML = '';
        compSelection_div.innerHTML = '';
    }
}

function win2(){
    compHP -= 5;
    userHP_div.innerHTML = userHP;
    userRoll_div.classList.remove("loseRoll");
    userRoll_div.classList.remove("drawRoll");
    userRoll_div.classList.add("winRoll");
    compHP_div.innerHTML = compHP;
    compRoll_div.classList.remove("winRoll");
    compRoll_div.classList.remove("drawRoll");
    compRoll_div.classList.add("loseRoll");
    if (userHP <= 0){
        result_div.innerHTML = "you're dead!";    
    }
    if (compHP <= 0){
        result_div.innerHTML = "you killed him";    
    } else {
    result_div.innerHTML = "You hit!";
    }
}
function magicWin2(){
    userHP += 10;
    userHP_div.innerHTML = userHP;
    userRoll_div.classList.remove("loseRoll");
    userRoll_div.classList.remove("drawRoll");
    userRoll_div.classList.add("winRoll");
    compHP_div.innerHTML = compHP;
    compRoll_div.classList.remove("winRoll");
    compRoll_div.classList.remove("drawRoll");
    compRoll_div.classList.add("loseRoll");
    if (userHP <= 0){
        result_div.innerHTML = "you're dead!";    
    }
    if (compHP <= 0){
        result_div.innerHTML = "you killed him";    
    } else {
    result_div.innerHTML = "You healed!";
    }
}
function sheildWin2(){
    userHP_div.innerHTML = userHP;
    userRoll_div.classList.remove("loseRoll");
    userRoll_div.classList.remove("drawRoll");
    userRoll_div.classList.add("winRoll");
    compHP_div.innerHTML = compHP;
    compRoll_div.classList.remove("winRoll");
    compRoll_div.classList.remove("drawRoll");
    compRoll_div.classList.add("loseRoll");
    if (userHP <= 0){
        result_div.innerHTML = "you're dead!";    
    }
    if (compHP <= 0){
        result_div.innerHTML = "you killed him";    
    } else {
    result_div.innerHTML = "You blocked!";
    }
}
function draw2(){
    userHP_div.innerHTML = userHP;
    userRoll_div.classList.remove("loseRoll");
    userRoll_div.classList.remove("winRoll");
    userRoll_div.classList.add("drawRoll");
    compHP_div.innerHTML = compHP;
    compRoll_div.classList.remove("winRoll");
    compRoll_div.classList.remove("loseRoll");
    compRoll_div.classList.add("drawRoll");
    if (userHP <= 0){
        result_div.innerHTML = "you're dead!";    
    } else if (compHP <= 0){
        result_div.innerHTML = "you killed him";    
    } else {
    result_div.innerHTML = "Your both miss";
    }
}

function lose2(){
    userHP -= 5;
    userHP_div.innerHTML = userHP;
    userRoll_div.classList.remove("winRoll");
    userRoll_div.classList.remove("drawRoll");
    userRoll_div.classList.add("loseRoll");
    compHP_div.innerHTML = compHP;
    compRoll_div.classList.remove("loseRoll");
    compRoll_div.classList.remove("drawRoll");
    compRoll_div.classList.add("winRoll");
    if (userHP <= 0){
        result_div.innerHTML = "you're dead!";    
    }
    else if (compHP <= 0){
        result_div.innerHTML = "you killed him";    
    } else {
        result_div.innerHTML = "You miss";
    }
    
}