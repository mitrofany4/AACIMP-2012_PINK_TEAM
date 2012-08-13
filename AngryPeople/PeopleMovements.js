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
var angry=0; //number of 100% angry people
var speedd=3000;

//creation of level
function onCreate(){
    levelchange(1);
    progress(0,10);
    startTime();
    myTimer();
    peopleappear(num);
}

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
function set_human(human,dir,type){

    if (type=="ord"){
        human.className="ordinary";

    } else if (type=="ret"){
        human.className="retired";
        }

    if (dir=="left"){   //change direction
        human.style.webkitTransform="scale(-1,1)";
        human.style.transform="scale(-1,1)";
    }
}

//make a css of ordinary person
function set_retired(human,dir){
    human.style.backgroundImage=retired_url;
    human.style.backgroundRepeat="no-repeat"
    human.style.width='94px';
    human.style.height='104px';
    human.style.position='absolute';
    if (dir=="left"){  //change direction
        human.style.webkitTransform="scale(-1,1)";
        human.style.transform="scale(-1,1)";
    }
//    human.style.bottom='100px'
}

//movement of every person
function peoplemovement(_person,_human)
{

    var interval=setInterval(function(){
        var xxx=document.getElementById("gamearea");
        if ((_person.xpos>5)&&(_person.xpos<=xxx.offsetWidth-_human.offsetWidth+5)){
            update_human(_person,_human);
        }
        else {
            _human.style.visibility="hidden";
            clearInterval(interval);
        }
    }, 50);
}

//update angry bar

function angry_update(_i,value){

    ArrPerson[_i].percent+=value*ArrPerson[_i].koef;

    if (ArrPerson[_i].percent>=100){
        ArrPerson[_i].percent=100;
        angry++;
        progress(angry,num);
        DivHuman[_i].style.display="none";
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

//set type of person

function get_type(){
    var type;
    var d=getRandom();

    if (d>=0.25){
        type="ord";
    } else{
        type="ret";
    }
    return type;
}

//set a new person

function create_person(_i,type) {
    var d = rand_dir();
    var xxx = document.getElementById("gamearea");

    if (type == "ord") {
        if (d == "right") {
            ArrPerson[_i] = new Ordinary(60, "right");
        }
        else {

            ArrPerson[_i] = new Ordinary(xxx.offsetWidth - 80, "left");
        }

    }

    else
        {
            if (type == "ret") {
                if (d == "right") {
                    ArrPerson[_i] = new Retired(60, "right");
                }
                else {

                    ArrPerson[_i] = new Retired(xxx.offsetWidth - 90, "left");
                }

            }

        }
    addDiv(_i);
    people_in_window++;
    DivHuman[_i] = document.getElementById("human" + _i.toString());
    set_human(DivHuman[_i], ArrPerson[_i].dir, ArrPerson[_i].type);

    }




// appearance of num people with interval 5000 msc
    function peopleappear(num) {
        var i = 0;
        var t;
        window.scrollTo(0, 1);
        var interval = setInterval(function () {
            if (i < num) {
                t=get_type();
                create_person(i,t);
                draw_human(ArrPerson[i],DivHuman[i]);
                draw_progressbar(i,DivHuman[i],ArrPerson[i].percent);
                peoplemovement(ArrPerson[i],DivHuman[i]);
                i++;
            }
            else {
                clearInterval(interval);
            }
        }, 5000);
    }
