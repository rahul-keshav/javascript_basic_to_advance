/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer,gamePlaying ;

init();


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
    scores[activePlayer] += roundScores;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

    
    
    console.log(scores);
    

    roundScores=0;
}


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
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
            // if the winner wins then UI changes...
            if((scores[activePlayer]+roundScores)>=100){
                document.getElementById('name-'+activePlayer).textContent= 'WINNER!!!';
                scores[activePlayer] += roundScores;
                document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
                document.querySelector('.dice').style.display='none';

                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

                document.querySelector('.btn-roll').style.display='none';
                document.querySelector('.btn-hold').style.display='none';

                gamePlaying=false;
            }
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
    
         
}
)
document.querySelector('.btn-hold').addEventListener('click',function(){       
        if(gamePlaying){
            hold();
        } 
});



document.querySelector('.btn-new').addEventListener('click',init);



function init(){
    scores=[0,0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying =true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // we can add do one thing that without removing the active class
    //  from panel-1(line no 122) and let the panel-1 active, but never do that
    // because extra active classes will get added to the panel one on that time
    // our code will start misbehaving..
    // and we will never know the why behind that...
    // 
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';

    

}
// console.log(dice)
// document.querySelector('#current-'+activePlayer).textContent = dice;

// var x = document.querySelector('#score-'+activePlayer).textContent
// console.log(x)


