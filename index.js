
var pl = playerChoice();
var pc = computerPlay();
var result = gamePlay(pl,pc);
console.log(result);

function computerPlay (){
    let i = Math.floor(Math.random()*4);
    if (i==0){
        return 'ROCK';
    }else if(i==1){
        return 'PAPER';
    }else{
        return 'SCISSORS';
    }
}
function playerChoice() {
    let choice = prompt("Choose -> Rock, Paper or Scisors ?");
    return choice.toUpperCase();
}
function gamePlay(player,computer){
    if (player == 'ROCK'){
        if(computer == 'ROCK'){
            return 'Draw';
        }else if(computer == 'PAPER'){
            return 'You Suck';
        }else{
            return 'That luck Motherfucker'
        }
    }else if(player == 'PAPER'){
        if(computer == 'ROCK'){
            return 'You won';
        }else if(computer == 'PAPER'){
            return 'Draw Bitch';
        }else{
            return 'Ha, gotcha!'
        }
    }else{
        if(computer == 'ROCK'){
            return 'SUCKEEER';
        }else if(computer == 'PAPER'){
            return 'Lucky Shot';
        }else{
            return 'Stop imitating me!'
        }
    }
}
