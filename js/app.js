$(document).ready(function(){
    $("#playGame").on("click", function() {
	
		playGame();

	})
});


function getComputerChoice(){
  var choice = Math.floor(Math.random() * 3);
  switch(choice){
    case 1:
      return 'rock';
     	break;
    case 2:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
   }
}

function determineWinner(userChoice,computerChoice){
  if(userChoice == "rock" && computerChoice =="scissors"){
    return "Human Wins";
  }else if(userChoice == "paper" && computerChoice =="rock"){
    return "Human Wins";
  }else if(userChoice == "scissors" && computerChoice == "paper"){
    return "Human Wins";
  }else if(userChoice == computerChoice){
    return "Tie";
  }else{
    return "Computer Wins";
  }
}
function playGame(){
  var userInput = prompt('Rock,Paper,Scissors?');
  userInput = userInput.toLowerCase();
  var userChoice = userInput;
  var computerChoice = getComputerChoice();
  alert('You threw: ' + userChoice);
  alert('The computer threw: ' + computerChoice);
  
  alert(determineWinner(userChoice,computerChoice));
  
}
