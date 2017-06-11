$(document).ready(function(){

  setInterval(function(){
    var date = Date();
    $("#date").text(date);
  }, 1000)
  
  var countdownTime = 1500000;
  var addSub = 60000;
  var newTime = 0;
  var realTime;
  var converted = function(ms){
    var minutes = Math.floor((ms/1000/60) << 0);
    var seconds = Math.floor((ms/1000) % 60);
    
    if(seconds < 10){
      $("#time").text(minutes + ":0" + seconds);
    } else {
      $("#time").text(minutes + ":" + seconds);
    }
  }

  
  $("#add").click(function(){
    newTime = countdownTime + addSub;
    countdownTime = newTime;
    converted(countdownTime);
  });
  
  $("#subtract").click(function(){
    newTime = countdownTime - addSub;
    countdownTime = newTime;
    converted(countdownTime);
  });
  
  $("#reset").click(function(){
    countdownTime = 1500000;
    converted(countdownTime);
  });
  
  $("#start").click(function(){
    var pomodoro = setInterval(function(){
        if(countdownTime > 0){
          var realTime = countdownTime - 1000;
          countdownTime = realTime;
          converted(countdownTime);
        } else {
          alert("Time's Up!");
          clearInterval(pomodoro);
        }
      }, 1000)
  });
})