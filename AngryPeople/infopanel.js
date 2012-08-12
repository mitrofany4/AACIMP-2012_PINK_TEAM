var seconds = 60;

function levelchange (level) {
    var levelnum = document.getElementById('levelnumber');
    levelnum.children[0].innerHTML=level;
}


function progress (first, second ) {
                var pr= document.getElementById('progress');
                pr.children[0].innerHTML=first;
                pr.children[1].innerHTML=second;
}

/*
function leveltime1 () {
                seconds-=1;
                var minutes = Math.floor(seconds / 60);
                var timer = document.getElementById('time');
                timer.children[0].innerHTML=minutes;
                if (seconds < 10)
                timer.children[1].innerHTML='0'+seconds;
                else
                timer.children[1].innerHTML=seconds;
                if (seconds > 0) {
//                <!--Time Over functions-->
//                alert('TIME OVER');
//                    clearInterval(intervid1);
//                    $.mobile.changePage( "index.html", { transition: "slideup"} );
                }
    setTimeout(leveltime1,1000);
}
*/
var timer;

var time;
function myTimer(){
    var minutes = Math.floor(seconds / 60);
/*    time = document.getElementById('time');
    time.children[0].innerHTML=minutes;
    if (seconds < 10)
        time.children[1].innerHTML='0'+seconds;
    else
        time.children[1].innerHTML=seconds;*/
    clearInterval(timer);
    timer = setInterval(function() {
        $('#time').text(seconds--);
        if (seconds == -1) {
            clearInterval(timer);
            alert('done');
        }
    }   , 1000);
}



//var intervid1  = setInterval(leveltime1,1000);


