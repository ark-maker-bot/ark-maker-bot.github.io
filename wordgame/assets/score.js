function getHighscore(){
  let difficulty = document.getElementById("mode").value;
  if(difficulty === 'easy')return localStorage.getItem('highscoreEasy');
  else if(difficulty === 'medium')return localStorage.getItem('highscoreNormal');
  else if(difficulty === 'hard')return localStorage.getItem('highscoreHard');
}
function setHighscore(score){
  let difficulty = document.getElementById("mode").value;
  switch(difficulty){
  case 'easy':{
    if(localStorage.getItem(`highscoreEasy`) < score)localStorage.setItem(`highscoreEasy`, score);
  }break;
  case 'medium':{
    if(localStorage.getItem(`highscoreNormal`) < score)localStorage.setItem(`highscoreNormal`, score);
  }break;
  case 'hard':{
    if(localStorage.getItem(`highscoreHard`) < score)localStorage.setItem(`highscoreHard`, score);
  }break;
  }
}
function createPlaceholders(){
  if(!localStorage.getItem("highscoreEasy") || localStorage.getItem("highscoreEasy") === null)localStorage.setItem("highscoreEasy", 0);
  if(!localStorage.getItem("highscoreNormal") || localStorage.getItem("highscoreNormal") === null)localStorage.setItem("highscoreNormal", 0);
  if(!localStorage.getItem("highscoreHard") || localStorage.getItem("highscoreHard") === null)localStorage.setItem("highscoreHard", 0);
}