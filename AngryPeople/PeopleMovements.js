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
function rand_X(){
    return rand_X = getRandomInt(50, window.outerWidth - 70);
}


// person movement direction generation
function rand_dir(){
var randInt = getRandom();

if (randInt >= 0.5) {
    return rand_dir = "right";
} else {
    return rand_dir = "left"
}
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

function myTimeoutFunction(person,human)
{
    if ((person.xpos>15)&&(person.xpos<=window.outerWidth-85)){
        update();
    }
    else {
        human.style.visibility="hidden"
    }
    setTimeout(myTimeoutFunction, 50);
}
function chosetype(){
    randInt = getRandom();
    if (randInt >= 0.5) {
        var randtype = 1;
    } else {
        randtype = 0
    }
}

function peopleapp(num,types){
   var ArrPerson = new Array(num);
   var DivHuman = new Array(num);
   for(var i=1;i<=num;i++){
         var randX = getRandomInt(50, window.outerWidth - 70);

         ArrPerson[i]=newPerson(rand_X(),rand_dir());

   }
}