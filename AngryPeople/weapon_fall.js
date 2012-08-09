
var block = false;

// checking the mouse in a gamezone
function mouseCoordinatesChecking(x, y){
    // gamefield - except the control buttons
    var topBarrier = balconyPos;
    var leftBarrier = document.getElementById("leftcontrolbutton").offsetWidth;
    var rightBarrier = document.getElementById("rightcontrolbutton").offsetLeft;

    return (x > leftBarrier && x < rightBarrier && y > topBarrier);
}

document.body.addEventListener("mousedown", function(event) {
    // checking if mouse is in a game zone
    if (mouseCoordinatesChecking(event.pageX, event.pageY) && !block){
        // new spit position
        var heroPosX = getHeroPostiton();
        var heroPosY = balconyPos;
        var intervalID;
        // stops old update
        clearInterval(intervalID);


        // creates a new spit
        if (heroModel.weaponInUse == 0){
            var drop = newSpit(heroPosX + 5, heroPosY, 0.1);
        }
        else if (heroModel.weaponInUse == 1){
            var drop = newSpit(heroPosX, heroPosY, 1);
        }

        // object drawing
        draw = function(drop) {
            if (spit.style.left == 0 + 'px' || spit.style.top == 510 + 'px'){
                spit.style.opacity = 0;
            }
            else {
                spit.style.opacity = 1;
            }
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
        block = true;
    }
});
