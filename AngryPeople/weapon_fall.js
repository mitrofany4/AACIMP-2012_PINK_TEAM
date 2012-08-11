var intervalID;
var block = false;
var bombAmount = 3;

var mousePosX = 0, mousePosY = 0;

// checking the mouse in a gamezone
function mouseCoordinatesChecking(x, y){
    // gamefield - except the control buttons
    var topBarrier = balconyPos;
    var leftBarrier = document.getElementById("leftcontrolbutton").offsetWidth;
    var rightBarrier = document.getElementById("rightcontrolbutton").offsetLeft;

    return (x > leftBarrier && x < rightBarrier && y > topBarrier);
}

function countChange (count){
    if (heroModel.weaponInUse == 1){
        var bombCount = document.getElementById('bomb_count');
        if (count > 0){
            count -= 1;
            bombCount.children[0].innerHTML = count;
            bombAmount = count;
        }
    }
}

function fireAction(){
    // checking if mouse is in a game zone
    if (mouseCoordinatesChecking(mousePosX, mousePosY) && !block){
        // new spit position
        var heroPosX = getHeroPostiton();
        var heroPosY = balconyPos;

        // stops old update
        //clearInterval(intervalID);


        // creates a new spit
        if (heroModel.weaponInUse == 0){
            var drop = newSpit(heroPosX + 5, heroPosY, 0.1);
            drop.amount = -1;
        }
        else if (heroModel.weaponInUse == 1){
            var drop = newSpit(heroPosX, heroPosY, 1);
            drop.amount = bombAmount;
            countChange(bombAmount);
        }

        // object drawing
        draw = function(drop) {

            if (drop.amount != 0){
                if (spit.style.left == 0 + 'px' || spit.style.top == 510 + 'px'){
                    spit.style.opacity = 0;
                }
                else {
                    spit.style.opacity = 1;
                }
                spit.style.visibility="visible";
                spit.style.left = drop.xpos + 'px';
                spit.style.top = drop.ypos + 'px';
            }
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
}
document.body.addEventListener("mousedown", function(event) {
    mousePosX = event.pageX;
    mousePosY = event.pageY
});

