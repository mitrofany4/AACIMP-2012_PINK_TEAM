function levelchange (level) {
    var levelnum = document.getElementById('levelnumber');
    levelnum.children[0].innerHTML=level;
}
//levelchange(1);


function progress (first, second ) {
                var pr= document.getElementById('progress');
                pr.children[0].innerHTML=first;
                pr.children[1].innerHTML=second;
}
//timer
//progress(1,10);

var timer;
var seconds = 120;
function startTime(){
    var minutes = Math.floor(seconds / 60);
    var sec=seconds-minutes*60;
    var text='Time: '+minutes.toString()+':';
    if (sec < 10)
        text+='0'+sec.toString();
    else
        text+=sec.toString();
    $('#time').text(text);
}

function myTimer(){
    clearInterval(timer);
    timer = setInterval(function() {
        seconds--;
        var minutes = Math.floor(seconds / 60);
        var sec=seconds-minutes*60;
        var text='Time: '+minutes.toString()+':';

        if (sec < 10)
            text+='0'+sec.toString();
        else
            text+=sec.toString();

        $('#time').text(text);
        if (seconds == 0) {
            clearInterval(timer);
            alert('done');
            for (var i=0; i<num; i++){
                DivHuman[i].style.display="none";
            }
        }
    }   , 1000);
}

//startTime();
//myTimer();

//var intervid1  = setInterval(leveltime1,1000);

