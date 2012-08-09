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

// Copy the "logical" object's position to the
// element in the DOM
draw = function(____person,____human) {
    ____human.style.left = ____person.xpos+'px';
    ____human.style.bottom = ____person.ypos+'px';
};

//calculation of next coordinates and redrawing

update = function(__person,__human) {
    updatePerson(__person);
    draw(__person,__human);
};

function chosetype(){
    randInt = getRandom();
    if (randInt >= 0.5) {
        var randtype = 1;
    } else {
        randtype = 0
    }
}

//add a new div element of person
function addDiv(_i){
    var ni = document.getElementById("humans");
    newDiv = document.createElement("div");
    name="human"+_i.toString();
    newDiv.setAttribute('id',name);
//    my_div = document.getElementById("human"+_i.toString());
//    document.body.insertBefore(newDiv, my_div);
    ni.appendChild(newDiv);
    }

//make a css of ordinary person
function set_ordinary(human){
    human.style.backgroundImage=ordinary_url;
    human.style.width='69px';
    human.style.height='104px';
    human.style.position='absolute';
//    human.style.bottom='100px'
}
//movement of every person
function peoplemovement(_person,_human)
{

    var interval=setInterval(function(){
        if ((_person.xpos>15)&&(_person.xpos<=window.outerWidth-85)){
            update(_person,_human);
        }
        else {
            _human.style.visibility="hidden";
            clearInterval(interval);
        }
    }, 50);
}
// appearance of num people with interval 5000 msc
function peopleappear(num){
    var i=0;

    var interval=setInterval(function(){
        if (i<num){
        ArrPerson[i]=newPerson(rand_X(),rand_dir());
        set_dir(ArrPerson[i]);
        addDiv(i);
        DivHuman[i]=document.getElementById("human"+ i.toString());
        set_ordinary(DivHuman[i]);
        draw(ArrPerson[i],DivHuman[i]);
        peoplemovement(ArrPerson[i],DivHuman[i]);
        i++;
        }
       else {clearInterval(interval);
        }
    },5000);
}
