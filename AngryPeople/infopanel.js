function start() {
    var ga = document.getElementById('gamearea');
    ga.style.visibility = 'hidden;'
}


var levellimeit = 10;
var seconds = 60;
function levelchange (level) {
    var levelnum = document.getElementById('levelnumber');
    levelnum.children[0].innerHTML=level;
    }
levelchange(1);
function progress (first, second )
            {
                var pr= document.getElementById('progress');
                pr.children[0].innerHTML=first;
                pr.children[1].innerHTML=second;
                }
progress(0,10);
function leveltime()
            {
                seconds-=1;
                var minutes = Math.floor(seconds / 60);
                var timer = document.getElementById('time');
                timer.children[0].innerHTML=minutes;
                if (seconds < 10)
                timer.children[1].innerHTML='0'+seconds;
                else
                timer.children[1].innerHTML=seconds;
                if (seconds == 0) {
                <!--Time Over functions-->
                alert('TIME OVER');
                clearInterval(intervid);
                }
}
var intervid  = setInterval(leveltime,1000);


