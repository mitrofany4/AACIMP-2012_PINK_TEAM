gravity = 0.2;

function newSpit(){
    return {
        xpos : 0,
        ypos : 0,
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

    if (obj.ypos > 400) {
        obj.ypos = 400;
        obj.yvel = 0;
        obj.yacc = 0;
        //obj.xvel = 0;
    }
}
