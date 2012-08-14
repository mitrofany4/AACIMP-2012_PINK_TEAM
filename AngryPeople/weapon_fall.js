var intervalID;
var block = false;
var bombAmount = 3,
    weaponAmount;
var mousePosX = 0, mousePosY = 0;
var clickCount = 0;
var drop = new Array();
// checking the mouse in a gamezone
function mouseCoordinatesChecking(x, y){
    // reletive coordinates for zoom
    var xRelative = x/zoom;
    var yRelative = y/zoom;
    // gamefield - except the control buttons
    var topBarrier = balconyPos;
    var leftBarrier = document.getElementById("leftcontrolbutton").offsetWidth;
    var rightBarrier = document.getElementById("rightcontrolbutton").offsetLeft;

//    alert(leftBarrier + " " + x/zoom + " " + rightBarrier);
    return (xRelative > leftBarrier && xRelative < rightBarrier && yRelative > topBarrier);
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

function fireAction(di){
    // checking if mouse is in a game zone
    if (mouseCoordinatesChecking(mousePosX, mousePosY) && !block){
        // new spit position
        var heroPosX = getHeroPostiton();
        var heroPosY = balconyPos;

        // stops old update
        //clearInterval(intervalID);


        // creates a new spit

            if (heroModel.weaponInUse == 0){
                drop[di] = new Weapon(heroPosX + heroObject.offsetWidth/2, heroPosY, 0.5);
                drop[di].amount = -1;
                weaponAmount = -1;
                console.log(di);
            }
            else if (heroModel.weaponInUse == 1){
                drop[di] = new Weapon(heroPosX, heroPosY, 1);
                drop[di].amount = bombAmount;
                weaponAmount = bombAmount;
                countChange(bombAmount);
            }
        // object drawing

        draw = function(drop) {
            if (drop.amount != 0){
                if (spit.style.top == 0 + 'px' || spit.style.offsetTop >510){
                    spit.style.visibility="hidden";
                }
                else {
                    spit.style.visibility="visible";
                }
            }
            else {
                spit.style.visibility="hidden";
            }
            spit.style.left = drop.xpos + 'px';
            spit.style.top = drop.ypos + 'px';
        };

        // updates coordinates and redraw the object
        update = function() {
            drop[di].weaponUpdate();
            draw(drop[di]);
        };

        // sets update interval until new spit creating
        intervalID = setInterval(update, 50);
        block = true;
    }
}

function Shoot(){
    var cC = clickCount;
        fireAction(cC);
        clickCount ++;
}

document.body.addEventListener("mousedown", function(event) {
    mousePosX = event.pageX;
    mousePosY = event.pageY
});

