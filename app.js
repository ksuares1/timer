// Create a function 
     var i= 1; 
    $(".start").click(function(e){
        $(".settings").change();
        setInterval(function (){
            $(".time").html(i);
            i++;
        }, 1000);
    });

    $(".settings").click(function(){
        clearInterval.$(".timer");
    });
 

//     function startTimer(duration, display) {
//         var timer = duration, minutes, seconds;
//         timeInterval = setInterval(function () {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);
    
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
    
//             display.text(minutes + ":" + seconds);
    
//             if (--timer < 0) {
//                 timer = duration;
//             }
    
//         }, 1000);
//         return timeInterval;
//     }

//     var countTimeInterval = startTimer();
// clearInterval(countTimeInterval);