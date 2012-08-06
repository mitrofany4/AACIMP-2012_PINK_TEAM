spit = document.getElementById("spit");
var drop = newSpit();

document.body.addEventListener("mousedown", function(event) {
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