spit = document.getElementById("spit");
var drop;

document.body.addEventListener("mousedown", function(event) {
    var heroPosX = getHeroPostiton();
    var heroPosY = balconyPos;
    drop = newSpit(heroPosX, heroPosY);

    draw = function(drop) {
        spit.style.left = drop.xpos + 'px';
        spit.style.top = drop.ypos + 'px';
    };

    update = function() {
        updateSpit(drop);
        draw(drop);
    };

    setInterval(update, 50);
});