gravity = 0.2;

function newSpit(xpos, ypos){
    return {
        xpos : xpos,
        ypos : ypos,
        //xvel : 0,
        yvel : 0,
        //xacc : 0,
        yacc : 0
    };
}

function updateSpit(obj){
    obj.yacc += gravity;
    obj.yvel += obj.yacc;
    obj.ypos += obj.yvel;

    if (obj.ypos > 510) {
        obj.ypos = 510;
        obj.yvel = 0;
        obj.yacc = 0;
        //obj.xvel = 0;
    }
}
