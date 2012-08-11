function newSpit(xpos, ypos, gravity){
    return {
        xpos : xpos,
        ypos : ypos,
        yvel : 0,
        yacc : 0,
        gravity : gravity

    };
}

function ifHit(obj){
    var p_num=-1;
    var i=0;
    for (i=0;i<people_in_window;i++){
        var xx=DivHuman[i].offsetLeft;
        var xw=DivHuman[i].offsetWidth;
        if ((spit.offsetLeft>=xx)&&(spit.offsetLeft<(xx+xw))){
            p_num=i;

        }
    }
        return p_num;
}

function updateSpit(obj){
    obj.yacc += obj.gravity;
    obj.yvel += obj.yacc;
    obj.ypos += obj.yvel;

    if (spit.offsetTop > 510) {

        spit.style.visibility="hidden";
        spit.offsetLeft=5;
        spit.offsetTop=5;
        obj.ypos = 0;
        obj.xpos = 0;
        obj.yvel = 0;
        obj.yacc = 0;
        block = false;
        clearInterval(intervalID);
        var h=ifHit(obj)
        if (h!=-1){
            angry_update(h,20);
        }
    }
        //hitAction(obj.xpos);

}
