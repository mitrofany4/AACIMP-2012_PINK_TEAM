spit = document.getElementById("spit");
//var drop;
var intervalID;

// checking the mouse in a gamezone
function mouseCoordinatesChecking(x, y){
    // gamefield - except the control buttons
    var topBarrier = balconyPos;
    var leftBarrier = document.getElementById("leftcontrolbutton").offsetWidth;
    var rightBarrier = document.getElementById("rightcontrolbutton").offsetLeft;


    return (x > leftBarrier && x < rightBarrier && y > topBarrier);
}

document.body.addEventListener("mousedown", function(event) {

    mouseCoordinatesChecking(0,0);
    // checking if mouse is in a game zone
    if (mouseCoordinatesChecking(event.pageX, event.pageY)){
        // new spit position
        var heroPosX = getHeroPostiton();
        var heroPosY = balconyPos;

        // stops old update
        clearInterval(intervalID);

        // creates a new spit
        var drop = newSpit(heroPosX, heroPosY);

        draw = function(drop) {
            spit.style.left = drop.xpos + 'px';
            spit.style.top = drop.ypos + 'px';
        };

        // updates coordinates and redraw the object
        update = function() {
            updateSpit(drop);
            draw(drop);
        };

        // sets update interval until new spit creating
        intervalID = setInterval(update, 50);
    }
});
