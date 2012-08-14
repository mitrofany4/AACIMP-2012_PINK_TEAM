var intervalID;
var block = false;
var bombAmount = 3,
    weaponAmount;
var mousePosX = 0, mousePosY = 0;
var clickCount = 0;
var drop = new Array();
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

function fireAction(di){
        // new spit position
    var heroPosX = getHeroPostiton();
    var heroPosY = balconyPos;

        // creates a new weapon
            if (heroModel.weaponInUse == 0){
                drop[di] = new Weapon(heroPosX + 20, heroPosY, 0.5);
                drop[di].amount = -1;
                weaponAmount = -1;
                var newSpitDiv = document.createElement("spitdiv");
                var spitName="spit"+di.toString();
                newSpitDiv.setAttribute('id',spitName);
                spit.appendChild(newSpitDiv);
            }
            else if (heroModel.weaponInUse == 1){
                drop[di] = new Weapon(heroPosX, heroPosY, 1);
                drop[di].amount = bombAmount;
                weaponAmount = bombAmount;
                countChange(bombAmount);
                var newBombDiv = document.createElement("waterbombdiv");
                var bombName="waterbomb"+di.toString();
                newBombDiv.setAttribute('id',bombName);
                waterbomb.appendChild(newBombDiv);
            }

        // object drawing
        draw = function(drop) {
            if (drop.amount != 0){
                if (heroModel.weaponInUse == 0){
                    if (spit.style.offsetTop > 510){
                        spit.style.display="none";
                    }
                    else if (drop.yvel == 0){
                        spit.style.visibility="hidden";
                    }
                    else {
                        spit.style.left = drop.xpos + 'px';
                        spit.style.top = drop.ypos + 'px';
                        spit.style.visibility="visible";
                    }
                }
                else if (heroModel.weaponInUse == 1){
                    if (waterbomb.style.offsetTop >510){
                        waterbomb.style.display="none";
                    }
                    else if (drop.yvel == 0){
                        waterbomb.style.visibility="hidden";
                    }
                    else {
                        waterbomb.style.left = drop.xpos + 'px';
                        waterbomb.style.top = drop.ypos + 'px';
                        waterbomb.style.visibility="visible";
                    }
                }
            }
            else {
                waterbomb.style.visibility="hidden";
                heroModel.weaponInUse = 0;
                waterbomb.style.left = drop.xpos + 'px';
                waterbomb.style.top = drop.ypos + 'px';
            }
        };

        // updates coordinates and redraw the object
        update = function() {
            drop[di].weaponUpdate();
            draw(drop[di]);
            console.log('!');
        };

        // sets update interval until new spit creating
        intervalID = setInterval(update, 50);

}

function Shoot(){
    var cC = clickCount;
    // checking if mouse is in a game zone
    if (mouseCoordinatesChecking(mousePosX, mousePosY) && !block){
        console.log(heroModel.weaponInUse);
        fireAction(cC);
        clickCount ++;
        block = true;
    }
}

document.body.addEventListener("mousedown", function(event) {
    mousePosX = event.pageX;
    mousePosY = event.pageY
});

