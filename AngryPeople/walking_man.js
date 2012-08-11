/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 11:51
 * To change this template use File | Settings | File Templates.
 */
// create a Person

var ordinary_url = "url('walking_man.png')";
var retired_url = "url('retired.png')";

 var retired = {
        xpos    :   0,
        ypos    :   20,
        speed   :   5,
        dir     :   "left",
        percent :   0,
        koef    :   0.5
}

var ordinary = {
    xpos    :   0,
    ypos    :   20,
    speed   :   3,
    dir     :   "left",
    percent :   0,
    koef    :   1
}
/*
function Person(dir,pos){


    this.update=function(){
        if ((this.xpos < Math.abs(this.speed) + 15) || (this.xpos > Math.abs(this.speed) + 15))
            this.xpos += this.speed;

    }
}
*/
function Ordinary(pos,dir){

    //variables

    this.xpos=pos;
    this.ypos=20;
    this.speed=2;
    this.dir=dir;
    this.percent=0;
    this.koef=1;

    //functions
    if (this.dir === "left"){
        this.speed *= (-1);
    }

    this.update=function(){
        if ((this.xpos < Math.abs(this.speed) + 15) || (this.xpos > Math.abs(this.speed)))
            this.xpos += this.speed;

    }
}

function Retired(pos,dir){

    //variables

    this.xpos=pos;
    this.ypos=20;
    this.speed=3;
    this.dir=dir;
    this.percent=0;
    this.koef=0.5

    //functions

    if (this.dir === "left"){
        this.speed *= (-1);
    }

    this.update=function(){
        if ((this.xpos < Math.abs(this.speed) + 15) || (this.xpos > Math.abs(this.speed) + 15))
            this.xpos += this.speed;

    }

}


/*function updatePerson(___person){

    // Navigation
    if ((___person.xpos < Math.abs(___person.speed) + 15) || (___person.xpos > Math.abs(___person.speed) + 15))
        ___person.xpos += ___person.speed;

}
*/
