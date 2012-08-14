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
                if (((spit.offsetLeft>=xx)&&(spit.offsetLeft<(xx+xw))) ||
                    ((waterbomb.offsetLeft>=xx)&&(waterbomb.offsetLeft<(xx+xw))) ||
                    ((tomato.offsetLeft>=xx)&&(tomato.offsetLeft<(xx+xw)))){
                    p_num=i;
                }
            }
            return p_num;
        }

        this.weaponUpdate = function(){
            this.yacc += this.gravity;
            this.yvel += this.yacc;
            this.ypos += this.yvel;

            if (spit.offsetTop > 510 || waterbomb.offsetTop > 510 || tomato.offsetTop > 510) {
                spit.style.top = 0 +'px';
                spit.style.visibility="hidden";
                waterbomb.style.top = 0 +'px';
                waterbomb.style.visibility="hidden";
                tomato.style.top = 0 +'px';
                tomato.style.visibility="hidden";
                this.ypos = balconyPos;
                this.xpos = getHeroPostiton() + 20;
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
                }else  if (heroModel.weaponInUse == 2){
                    val=35;
                }
                if (h!=-1 && weaponAmount != 0){
                    angry_update(h,val);
                }
            }

            if (bombAmount == 0){
                var waterbombIcon = document.getElementById("waterbomb_icon")
                slideImage.src = "images/spit_icon.png";
                waterbombIcon.style.opacity = 0.2;
            }
            if (tomatoAmount == 0){
                var tomatoIcon = document.getElementById("tomato_icon");
                slideImage.src = "images/spit_icon.png";
                tomatoIcon.style.opacity = 0.2;
            }
        }
}