/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer ;

scores=[0,0];
activePlayer = 0;
roundScores = 0;

function hold(){
    // if(activePlayer===0)
    //     {activePlayer = 1;
    //         document.querySelector('.player-0-panel').classList.remove('active');
    //         document.querySelector('.player-1-panel').classList.add('active');
    //     }
    // else{activePlayer = 0;
    //     document.querySelector('.player-0-panel').classList.add('active');
    //     document.querySelector('.player-1-panel').classList.remove('active');    
    // }   
    
    // we can use ternary operater:
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

    scores[activePlayer]+=roundScores;
    

    
    console.log(scores[0]);
    console.log(scores[1]);
    roundScores=0;
}



document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click',function(){

    // 1. random number
    var dice = Math.floor(Math.random()*6)+1

    // 2. display the result 
    var diceDOM =document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice + '.png';

    // 3. update the total score only if the rolled up is NOT 1;
        if(dice!==1){
            // add score
            roundScores += dice; 
            document.querySelector('#current-'+activePlayer).textContent = roundScores;  
        }
        else{
            // current = 0
            // next player turn 
            roundScores=0 
            document.querySelector('#current-'+activePlayer).textContent = roundScores
            hold();
            // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            // document.querySelector('.player-0-panel').classList.toggle('active');
            // document.querySelector('.player-1-panel').classList.toggle('active');
            
        }   
}
)
document.querySelector('.btn-hold').addEventListener('click',function(){
        
        // add current score to the global scores
        
        hold();


        // update the UI;


        // check if the player won the game;





})
// console.log(dice)
// document.querySelector('#current-'+activePlayer).textContent = dice;

// var x = document.querySelector('#score-'+activePlayer).textContent
// console.log(x)


