/**
 * Created with JetBrains WebStorm.
 * User: Dimon
 * Date: 09.08.12
 * Time: 14:25
 * To change this template use File | Settings | File Templates.
 */
//setTimeout(function () {
//    window.scrollTo(0, 1);
//    }, 1000);

var bodyScreen = document.getElementsByTagName("body")[0];
var gameareaScreen = document.getElementById("gamearea");
var zoom;


function optimizeInterface(){
    window.scrollTo(0, 1);

    zoom = bodyScreen.offsetHeight/gameareaScreen.offsetHeight;

    gameareaScreen.style.zoom = zoom;
    addRightPannel();

}

//add a new div element of person
function addRightPannel(){
    var bttn = document.getElementById("rightcontrolbutton");
    var buttonTop = gameareaScreen.offsetWidth - bttn.offsetWidth;
    bttn.style.left = buttonTop + 'px';
}

document.getElementsByTagName("body")[0].onresize(function() {
    optimizeInterface();
});