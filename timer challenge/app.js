// Create a function 
     var i= 1; 
    $(".start").click(function(e){
        setInterval(function (){
            $(".timer").html(i);
            i++;
        }, 1000);
    }
    );
