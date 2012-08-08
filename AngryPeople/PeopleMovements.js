/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 21:32
 * To change this template use File | Settings | File Templates.
 */
var randX;
var randInt;
var randdir;
var ArrPerson = new Array();
var DivHuman = new Array();

// randoms
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom() {
    return Math.random();
}
// person appearance coordinates generation
function rand_X(){
    return getRandomInt(50, window.outerWidth - 70);
}
// person movement direction generation
function rand_dir(){
 var randInt = getRandom();

if (randInt >= 0.5) {
    return randdir = "right";
} else {
    return randdir = "left"
}
}
// Setup human element and ordinary model
//var ordinary = newPerson(randX,randdir);
//human = document.getElementById("human");

// Copy the "logical" object's position to the
// element in the DOM
draw = function(person,human) {
    human.style.left = person.xpos+'px';
    human.style.bottom = person.ypos+'px';
};

//calculation of next coordinates and redrawing

update = function(person,human) {
    updatePerson(person);
    draw(person,human);
};

//set_dir(ordinary);

// movement loop

function myTimeoutFunction(person,human)
{
    if ((person.xpos>15)&&(person.xpos<=window.outerWidth-85)){
        update(person,human);
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
function addDiv(_i){
    var ni = document.getElementById("humans");
    newDiv = document.createElement("div");
    name="human"+_i.toString();
    newDiv.setAttribute('id',name);
//    my_div = document.getElementById("human"+_i.toString());
//    document.body.insertBefore(newDiv, my_div);
    ni.appendChild(newDiv);
    }

function set_ordinary(human){
    human.style.backgroundImage=ordinary_url;
    human.style.width='69px';
    human.style.height='104px';
    human.style.position='absolute'
}

function peoplegen(num,types){

   for(var i=0;i<num;i++){
         ArrPerson[i]=newPerson(rand_X(),rand_dir());
         set_dir(ArrPerson[i]);
         addDiv(i);
         name="human"+ i.toString();
         DivHuman[i]=document.getElementById("human"+ i.toString());
         set_ordinary(DivHuman[i]);
         myTimeoutFunction(ArrPerson[i],DivHuman[i]);

   }
 //   appear(num);
}

function appear(num){
    var i=0;
    if (i<num){
        myTimeoutFunction(ArrPerson[i],DivHuman[i]);
        setTimeout(appear,2000);
    }
}