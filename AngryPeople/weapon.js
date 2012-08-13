function Weapon(xpos, ypos, gravity){

        this.xpos = xpos,
        this.ypos = ypos,
        this.yvel = 0,
        this.yacc = 0,
        this.gravity = gravity

        this.ifHit = function(){
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

        this.weaponUpdate = function(){
            this.yacc += this.gravity;
            this.yvel += this.yacc;
            this.ypos += this.yvel;

            if (spit.offsetTop > 510) {
                spit.style.visibility="hidden";
                spit.style.top=0+'px';
                // spit.offsetTop=0;
                this.ypos = 0;
                this.xpos = 100;
                this.yvel = 0;
                this.yacc = 0;
                block = false;
                clearInterval(intervalID);
                var h=this.ifHit();
                var val;
                if (heroModel.weaponInUse == 0){
                    val=20;
                }else  if (heroModel.weaponInUse == 1){
                    val=50;
                }
                if (h!=-1 && weaponAmount != 0){
                    angry_update(h,val);
                }
            }
        }
}