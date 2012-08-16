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

            if (parseInt($("#progress").children[0]) >= 1)
                timeisend('You are the winner!');
            else
                timeisend('Try Again');

            for (var i=0; i<num; i++){
                DivHuman[i].style.display="none";
            }
        }
    }   , 1000);
}

function timeisend(textinbox) {
    $("#dialogback").css("display","block");
    $("#dialogendoftime").css("top", parseInt(gamearea.offsetHeight - dialogendoftime.offsetHeight)/2 + 'px');
    $("#dialogendoftime").css("left",parseInt(gamearea.offsetWidth - dialogendoftime.offsetWidth)/2 + 'px');
    $("#dialogendoftime").css("display","block");
    $("#textdialog").text(textinbox);
    if (textinbox == 'Try Again')
    {
        $("#tryagain").css("display", "block");
        $("#youwin").css("display","none");
    } else
    {
        $("#tryagain").css("display", "none");
        $("#youwin").css("display","block");
        level+=1;
        localStorage.setItem('levelsolve',level);
    }
}


