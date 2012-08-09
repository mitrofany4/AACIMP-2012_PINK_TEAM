function newSpit(xpos, ypos, gravity){
    return {
        xpos : xpos,
        ypos : ypos,
        yvel : 0,
        yacc : 0,
        gravity : gravity
    };
}

function updateSpit(obj){
    obj.yacc += obj.gravity;
    obj.yvel += obj.yacc;
    obj.ypos += obj.yvel;

    if (obj.ypos > 510) {
        obj.ypos = 510;
        obj.yvel = 0;
        obj.yacc = 0;
        block = false;
        hitAction(obj.xpos);
    }
}
