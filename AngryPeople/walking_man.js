/**
 * Created with JetBrains WebStorm.
 * User: Malta
 * Date: 06.08.12
 * Time: 11:51
 * To change this template use File | Settings | File Templates.
 */
// create a Person
function newPerson(pos,dir){
    return{
    speed  : 5,
//    xacc   : 0,
    ypos   : 10,
    xpos   : pos,
    dir    : dir
        };
}

function set_dir(person){
    if (person.dir === "left"){
        person.speed *= (-1);
    }
}
function updatePerson(person){

    // Navigation
    if ((person.xpos < Math.abs(person.speed) + 15) || (person.xpos > Math.abs(person.speed) + 15))
        person.xpos += person.speed;

}