$(document).ready(function(){

   compScore=0;
     userScore=0;

    $('.play-options').click(function(){
$(this).toggleClass('selection')
var userOption=($(this).text()).trim();

if(userOption==='ROCK'){
    usersChoice=0;
}
 else if(userOption==='PAPER'){
    usersChoice=1;
}
else if(userOption==='SCISSORS'){
    usersChoice=2;
}


theWinner=calculateWinner(usersChoice);
console.log(theWinner)
$('.winner-start').remove();
$('.winner-name').text(theWinner);
$('.user-score').text(userScore);
$('.comp-score').text(compScore);
    })
})

function calculateWinner(usersChoice){
    console.log("func called")

 var compChoice =  generateComputerChoice();
console.log("comp choice:"+compChoice);

if(usersChoice==compChoice){
    return 'Its a draw'
}
if(usersChoice==0 && compChoice==1 || usersChoice==1 && compChoice==2 || usersChoice==2 && compChoice==0 ){
    compScore++;
    $('.comp-score-board').addClass('red-glow');
    setTimeout(function(){
        $('.comp-score-board').removeClass('red-glow'); 
    },1000)
   
    return 'COMPUTER';
}
else if(usersChoice==0 && compChoice==2 || usersChoice==2 && compChoice==1 || usersChoice==1 && compChoice==0){
    userScore++;
    $('.user-score-board').addClass('green-glow');
    setTimeout(function(){
        $('.user-score-board').removeClass('green-glow'); 
    },1000)
    return 'YOU';
}

else{
   alert("some error");
}

 function generateComputerChoice(){
   return Math.floor(Math.random()*3)
 }
}


