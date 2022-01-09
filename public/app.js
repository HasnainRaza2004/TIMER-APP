var startBtn = document.getElementById("startBtn");
var resetBtn = document.getElementById("resetBtn");
var stopBtn = document.getElementById("stopBtn")

var H = document.getElementById("hours");
var M =  document.getElementById("mins");
var S =  document.getElementById("sec");



var startTimer = null;

function timer(){
      if(H.value == 0 && M.value == 0 && S.value == 0){
            H.value = 0;
            M.value = 0;
            S.value = 0;
      }else if(S.value != 0){
            S.value--;
      }else if(M.value != 0 && H.value != 0){
            S.value = 59;
            H.value--;
            M.value--;
      }else if(H.value != 0 && M.value == 0){
            M.value = 60;
            H.value--; 
      }return;
};
function resetTimer(){
      clearInterval(startTimer);
};

startBtn.addEventListener("click",function(){
    function startInterval(){
          startTimer = setInterval(function(){
                timer();
          },1000);
    }
    startInterval()
});

resetBtn.addEventListener("click",function(){
      H.value = 0;
      M.value = 0;
      S.value = 0;
      resetTimer()
});

stopBtn.addEventListener("click",function(){
      function stopInterval(){
             clearInterval(startTimer);
      };
       stopInterval();
      
});