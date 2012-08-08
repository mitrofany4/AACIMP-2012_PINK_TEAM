/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 21:32
 * To change this template use File | Settings | File Templates.
 */
// randoms
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom() {
    return Math.random();
}
// person appearance coordinates generation

var randX = getRandomInt(50, window.outerWidth - 70);

// person movement direction generation
var randInt = getRandom();

if (randInt >= 0.5) {
    var randdir = "right";
} else {
    randdir = "left"
}

// Setup human element and ordinary model
var ordinary = newPerson(randX,randdir);
human = document.getElementById("human");

// Copy the "logical" object's position to the
// element in the DOM
draw = function(ordinary) {
    human.style.left = ordinary.xpos+'px';
    human.style.bottom = ordinary.ypos+'px';
};

//calculation of next coordinates and redrawing

update = function() {
    updatePerson(ordinary);
    draw(ordinary);
};

set_dir(ordinary);

// movement loop

function myTimeoutFunction()
{
    if ((ordinary.xpos>15)&&(ordinary.xpos<=window.outerWidth-85)){
        update();
    }
    else {
        human.style.visibility="hidden"
    }
    setTimeout(myTimeoutFunction, 50);
}
