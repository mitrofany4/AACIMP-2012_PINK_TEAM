/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 21:32
 * To change this template use File | Settings | File Templates.
 */
var randX;
var randInt;
var ArrPerson = new Array(); //array of person models
var DivHuman = new Array(); // array of people`s divs
var num=10;  //count of people
var people_in_window=0;

var speedd=3000;

// randoms
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom() {
    return Math.random();
}
// person appearance coordinates generation
function rand_X(){
    var xxx=document.getElementById("gamearea");
    return getRandomInt(50, xxx.offsetWidth - 70);
}
// person movement direction generation
function rand_dir(){
 var randInt = getRandom();
 var randdir;
if (randInt >= 0.5) {
    return randdir = "right";
} else {
    return randdir = "left"
}
}

// Copy the "logical" object's position to the
// element in the DOM
draw_human = function(person, human) {
    human.style.left = person.xpos+'px';
    human.style.bottom = person.ypos+'px';
};

//calculation of next coordinates and redrawing
update_human = function(person,human) {
    person.update();
    draw_human(person,human);
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
    var newDiv = document.createElement("div");
    var name="human"+_i.toString();
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
        var xxx=document.getElementById("gamearea");
        if ((_person.xpos>15)&&(_person.xpos<=xxx.offsetWidth-80)){
            update_human(_person,_human);
        }
        else {
            _human.style.visibility="hidden";
            clearInterval(interval);
        }
    }, 500);
}

//update angry bar

function angry_update(_i,value){

    ArrPerson[_i].percent+=value*ArrPerson[_i].koef;

    if (ArrPerson[_i].percent>100){
        ArrPerson[_i].percent=100;
    }
    draw_progressbar(_i,DivHuman[_i],ArrPerson[_i].percent);

 }

// progressbar drawing for everybody

function draw_progressbar(_i,human,percent){
    var newDiv = document.createElement("div");
    var name="Bar"+_i.toString();
    newDiv.className="meter";
    newDiv.style.width=human.offsetWidth+'px';
    newDiv.style.position="inherit";
    newDiv.style.top="-15px";
    newDiv.innerHTML='<span style="width: '+percent.toString()+'%"></span>';

    human.appendChild(newDiv);
}

// appearance of num people with interval 5000 msc
function peopleappear(num){
    var i=0;

    var interval=setInterval(function(){
        if (i<num){
            var d=rand_dir();
            if (d=="right"){
                ArrPerson[i]=new Ordinary(60,"right");
            }
            else {
                var xxx=document.getElementById("gamearea");
                ArrPerson[i]=new Ordinary(xxx.offsetWidth-80,"left");
            }
      //      ArrPerson[i]=new Ordinary(rand_X(),rand_dir());
            addDiv(i);
            DivHuman[i]=document.getElementById("human"+ i.toString());
            people_in_window++;
            set_ordinary(DivHuman[i]);
            draw_human(ArrPerson[i],DivHuman[i]);
            draw_progressbar(i,DivHuman[i],ArrPerson[i].percent);
            peoplemovement(ArrPerson[i],DivHuman[i]);
            i++;
        }
        else {
            clearInterval(interval);
        }
    },5000);
}
