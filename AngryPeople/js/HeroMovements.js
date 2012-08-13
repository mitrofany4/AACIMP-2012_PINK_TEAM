/**
 * Created with JetBrains WebStorm.
 * User: atx-user
 * Date: 06.08.12
 * Time: 11:06
 * To change this template use File | Settings | File Templates.
 */

// balcony top position
const balconyPos = document.getElementById("balcony").offsetTop;

// a hero structure
var heroModel = {
    position:    500,
    state:       "up",
    weaponInUse: 0
};

// a man on the balcony
var heroObject;
var balcony;
var heroInterval;
var mouseIsDown;


// initialize the balcony and hero html-objects
function initObjects(){
    balcony = document.getElementById("balcony");
    heroObject = document.getElementById("hero1");
}

// movement to the left
function leftAction(){
    initObjects();
    // checking if the object is out of balcony
    var absoluteLeftBarrier = balcony.offsetLeft;
    if (heroModel.position >= absoluteLeftBarrier){
        // hero position without 'px'
        var position = parseInt(heroObject.style.left);
        position -= 30;
        // js-object
        heroModel.position -= 30;
        // html-object
        heroObject.style.left = position + 'px';
    }
    mouseIsDown = true;
}

// movement to the right
function rightAction(){
    initObjects();
    // checking if the object is out of balcony
    var absoluteRightBarrier = balcony.offsetWidth + balcony.offsetLeft - heroObject.offsetWidth;
    if (heroModel.position <= absoluteRightBarrier){
        // hero position without 'px'
        var position = parseInt(heroObject.style.left);
        position += 30;
        // js-object
        heroModel.position += 30;
        // html-object
        heroObject.style.left = position + 'px';
    }
    mouseIsDown = true;
}

// clinging
function clingLeft() {
    //heroInterval = setTimeout(function(){
        leftAction();
    //    clingLeft();
    //}, 20);
}

function clingRight(){
    // heroInterval = setTimeout(function(){
        rightAction();
    //    clingRight();
    //}, 20);
}

// event Handlers For Mouse and touch events
$("#rightcontrolbutton").bind('vmousedown', function(){
    clingRight();
});

$("#rightcontrolbutton").bind('vmouseup', function(){
    endOfTouch();
});

$("#leftcontrolbutton").bind('vmousedown', function(){
    clingLeft();
});

$("#leftcontrolbutton").bind('vmouseup', function(){
    endOfTouch();
});

$("#gamearea").bind('vmouseup', function(){
    bodyEndOfTouch();
});

// stops clinging
function endOfTouch(){
    clearInterval(heroInterval);
    mouseIsDown = false;
}

function bodyEndOfTouch(){
    if (mouseIsDown)
        clearInterval(heroInterval);
}

// get hero x cordinate
function getHeroPostiton(){
    return heroModel.position;
}
