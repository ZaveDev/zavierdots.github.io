
//This function determines whether the User Wins, Loses, or Draws
function game(userChoice) {
    const compChoice = compuChoice();
    computerImage(compChoice);
    switch (userChoice + compChoice) {
//Win cases
        case "swma":
            winSword(userChoice, compChoice);
            break;
        case "mash":
            winMagic(userChoice, compChoice);
            break;
        case "shsw":
            winShield(userChoice, compChoice);
            break;
//Draw cases
        case "swsw":
            drawSword();
            break;
        case "mama":
            drawMagic();
            break;
        case "shsh":
            drawShield();
            break;
//Lose cases
        case 'swsh':
            loseSword(userChoice, compChoice);
            break; 
        case 'masw':
            loseMagic(userChoice, compChoice);
            break;
        case 'shma':
            loseShield(userChoice, compChoice);
            break;
    }
 }

//This function listens for the Users input when they click on a button
function main() {
    sword_div.addEventListener('click', function() {
        game("sw");
        userSelection_div.innerHTML = '<img src="SMS/assets/css/images/sword.png" alt="Sword" height="50" width="50"></img>';
        goToLevel2();
    });
    
    magic_div.addEventListener('click', function() {
        game("ma");
        userSelection_div.innerHTML = '<img src="SMS/assets/css/images/magic.png" alt="Magic" height="50" width="50"></img>';
        goToLevel2();
    });

    shield_div.addEventListener('click', function() {
        game("sh");
        userSelection_div.innerHTML = '<img src="SMS/assets/css/images/shield.png" alt="Shield" height="50" width="50"></img>';
        goToLevel2();
    });
    reset_div.addEventListener('click', function(){
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = "Who is gonna win?";
        userSelection_div.innerHTML = '';
        compSelection_div.innerHTML = '';
        levelButton_div.innerHTML = '';
        levelButton_div.classList.remove('levelButton')        
    });
}
main();

