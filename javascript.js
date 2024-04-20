var playing = false;
var score;
var action;
var timeremaining;

//first we click on the start/resset button
document.getElementById("start").onclick = 
function(){
  //if player is playing
if(playing == true){
    
  location.reload();//reload the page
}
else{//if player is not playing
    
    //change mood to playing
    playing = true;
    //score will be zero
  score = 0; 
  document.getElementById("scorevalue").innerHTML = score;
 // show countdown box
  document.getElementById("timeremaining").style.display = "block";
    timeremaining = 60;
      //hide gameover box 
       hide("gameover")
    document.getElementById("timevalue").innerHTML = timeremaining
  //change the buttton to reset
  document.getElementById("start").innerHTML = "Reset game";
      startcountdownbox();
      //generate newqa
      generateqa();
}
}
 for( i=1;i<5;i++){
  document.getElementById("box"+i).onclick =
 function(){
  //check player is playing//
   if(playing==true){
    //yes//
     if(this.innerHTML == correctanswer){
      //correct answer
      //increase sdcore by 1
      score++;
      document.getElementById("scorevalue").innerHTML = score;
      //hide the wrong box and show the correct box
      hide("wrong");
      show("correct");
      setTimeout(function() {
        hide("correct");
      }, 1000);

      //generate the newqa
        generateqa();
     }else{
      //wrong answer
      hide("correct");
      show("wrong");
      setTimeout(function(){
        hide("wrong");
      }, 1000);
     }
     }
   }
 }

 


//if player is playing
//reload the page 
//if player is not playing 
//score will be zero
//show countdown box
//time remaining reduces by 1 sec 
//timeleft?
//yes continue
// no game over
//change the buttton to reset
//and generate the new questions
//if we click on the answer box
//if we r playing
//correct
//yes
//if he gives right answer 
//show correct box 1sec
//increase score by 1
//and generate the new questions
//if he gives wrong answer 
// show try again box for 1sec
//functions

//start counter
function startcountdownbox(){
     action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timevalue").innerHTML = timeremaining;
        if(timeremaining == 0){//game over
          stopcountdown();
          show("gameover");
          document.getElementById("gameover").style.display = "block";
          document.getElementById("gameover").innerHTML = "<p>game over !</p> <p>Your Score is" + score + " .</p>";
             hide("timeremaining")
             hide("correct")
             hide("wrong")
             playing = false;
             document.getElementById("start").innerHTML ="Start Game"
           } 
          },1000);
}

//stop counter
function stopcountdown(){
   clearInterval(action)
}
//hide element
function hide(id){
  document.getElementById(id).style.display = "none";

}
//show element
function show(id){
   document.getElementById(id).style.display ="block";

}
function generateqa(){
   var x = 1 + Math.round(9*Math.random());
   var y = 1 + Math.round(9*Math.random());
    correctanswer = x*y;

    document.getElementById("question").innerHTML = x + "X" + y;
     var correctposition = 1+ Math.round(3*Math.random());
     document.getElementById("box"+correctposition).innerHTML = correctanswer; //fill the one box with correct answer
     //fill the other box with wrong answer
      
     var answer = [correctanswer];


     for(i=1;i<5; i++){
         if( i != correctposition){
         var wronganswer;
         do{
          var wronganswer=(1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));//a wrong answer
         }
         while(answer.indexOf(wronganswer)>-1){
          
         }
          document.getElementById("box"+i).innerHTML = wronganswer;
          answer.push(wronganswer);
      }
     }
}