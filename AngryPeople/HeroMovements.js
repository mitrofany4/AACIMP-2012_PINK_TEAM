/**
 * Created with JetBrains WebStorm.
 * User: atx-user
 * Date: 06.08.12
 * Time: 11:06
 * To change this template use File | Settings | File Templates.
 */

// balcony top position
const balconyPos = document.getElementById("balcony").offsetTop;
var rightButton = document.getElementById("rightcontrolbutton");
var leftButton = document.getElementById("leftcontrolbutton");

// a hero structure
var heroModel = {
    position:    120,
    state:       "up",
    weaponInUse: 0
};

// a man on the balcony
var heroObject;
var balcony;
var heroInterval;

// initialize the balcony and hero html-objects
function initObjects(){
    balcony = document.getElementById("balcony");
    heroObject = document.getElementById("hero");
}

// movment to the left
function leftAction(){
    initObjects();
    // checking if the object is out of balcony
    var absoluteLeftBarrier = balcony.offsetLeft;
    if (heroModel.position >= absoluteLeftBarrier){
        // hero position without 'px'
        var position = parseInt(heroObject.style.left);
        position -= 10;
        // js-object
        heroModel.position -= 10;
        // html-object
        heroObject.style.left = position + 'px';
    }
}

// movement to the right
function rightAction(){
    initObjects();
    // checking if the object is out of balcony
    var absoluteRightBarrier = balcony.offsetWidth + balcony.offsetLeft - heroObject.offsetWidth;
    if (heroModel.position <= absoluteRightBarrier){
        // hero position without 'px'
        var position = parseInt(heroObject.style.left);
        position += 10;
        // js-object
        heroModel.position += 10;
        // html-object
        heroObject.style.left = position + 'px';
    }
}

// clinging
function clingLeft() {
    heroInterval = setInterval(leftAction, 50);
}
function clingRight(){
    heroInterval = setInterval(rightAction, 50);
}


leftButton.addEventListener("touchstart", clingLeft());
rightButton.addEventListener("touchstart", clingRight());

// stops clinging
function endOfTouch(){
    clearInterval(heroInterval);
}
document.body.addEventListener("touchend", endOfTouch());

// get hero x cordinate
function getHeroPostiton(){
    return heroModel.position;
}
