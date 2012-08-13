function levelchange (level) {
    var levelnum = document.getElementById('levelnumber');
    levelnum.children[0].innerHTML=level;
}
levelchange(1);


function progress (first, second ) {
                var pr= document.getElementById('progress');
                pr.children[0].innerHTML=first;
                pr.children[1].innerHTML=second;
}
progress(0,10);


var seconds = 60;
var minutes = 0;
var times = seconds;
var timer = document.getElementById('time');

function levelstime() {
//    alert("sdfds");
    $("#time").everyTime(1000, 'timer2' ,function() {
    seconds--;
    minutes = Math.floor(seconds / 60);
    timer.children[0].innerHTML=minutes;
    if (seconds < 10)
    {
        timer.children[1].innerHTML='0'+seconds;
    }
    else
    {
        timer.children[1].innerHTML=seconds;
    }
//    if (seconds == 0) {
//        timer.stopTime('timer2');
//        alert('done');
//    }
}
    , times);
}
levelstime();



