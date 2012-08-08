spit = document.getElementById("spit");
var drop;
var intervalID;

document.body.addEventListener("mousedown", function(event) {
    // new spit position
    var heroPosX = getHeroPostiton();
    var heroPosY = balconyPos;

    // stops old update
    clearInterval(intervalID);

    // creates a new spit
    drop = newSpit(heroPosX, heroPosY);

    draw = function(drop) {
        spit.style.left = drop.xpos + 'px';
        spit.style.top = drop.ypos + 'px';
    };

    // updates coordinates and redraw the object
    update = function() {
        updateSpit(drop);
        draw(drop);
    };

    // sets update inderval until new spit creating
    intervalID = setInterval(update, 50);
});