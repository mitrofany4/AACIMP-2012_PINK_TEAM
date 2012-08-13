/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 11:51
 * To change this template use File | Settings | File Templates.
 */
// create a Person

var ordinary_url = "url('images/BigMan.png')";
var retired_url = "url('images/retired.png')";

function Ordinary(pos,dir){

    //variables

    this.xpos=pos,
    this.ypos=20,
    this.speed=2,
    this.dir=dir,
    this.percent=0,
    this.koef=1,
    this.type="ord";

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

    this.xpos=pos,
    this.ypos=20,
    this.speed=1,
    this.dir=dir,
    this.percent=0,
    this.koef=0.5,
    this.type="ret";


    //functions

    if (this.dir === "left"){
        this.speed *= (-1);
    }

    this.update=function(){
        if ((this.xpos < Math.abs(this.speed) + 20) || (this.xpos > Math.abs(this.speed) + 5))
            this.xpos += this.speed;

    }

}

