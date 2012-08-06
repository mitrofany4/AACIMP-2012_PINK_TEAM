/**
 * Created with JetBrains WebStorm.
 * User: atx-user
 * Date: 06.08.12
 * Time: 11:06
 * To change this template use File | Settings | File Templates.
 */
// a hero structure
var hero = {
    position:    120,
    state:       "up",
    weaponInUse: "paperBalls"
};
// a man on the balcony
var currentHero = new hero;
var heroObject;

// movment to the left
function leftAction(){
    heroObject = document.getElementById("hero");
    // hero position without 'px'
    var position = parseInt(heroObject.style.left);
    position -= 10;
    // js-object
    heroObject.position -= 10;
    // html-object
    heroObject.style.left = position + 'px';
}

// movement to the right
function rightAction(){
    heroObject = document.getElementById("hero");
    // hero position without 'px'
    var position = parseInt(heroObject.style.left);
    position += 10;
    // js-object
    heroObject.position += 10;
    // html-object
    heroObject.style.left = position + 'px';

}