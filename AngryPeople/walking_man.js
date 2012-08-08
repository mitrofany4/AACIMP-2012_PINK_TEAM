/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 11:51
 * To change this template use File | Settings | File Templates.
 */
// create a Person

var ordinary_url = "url('walking_man.png')";

function newPerson(pos,dir){
    return{
    speed  : 5,
//    xacc   : 0,
    ypos   : 20,
    xpos   : pos,
    dir    : dir
        };
}

function set_dir(____person){
    if (____person.dir === "left"){
        ____person.speed *= (-1);
    }
}
function updatePerson(___person){

    // Navigation
    if ((___person.xpos < Math.abs(___person.speed) + 15) || (___person.xpos > Math.abs(___person.speed) + 15))
        ___person.xpos += ___person.speed;

}