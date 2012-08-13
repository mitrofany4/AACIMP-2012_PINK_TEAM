// weapon choosing
var spit, waterbomb;

function setSpit (){
    heroModel.weaponInUse = 0;
}

function setBomb (){
    heroModel.weaponInUse = 1;
}

function returnWeapon (){
    if (heroModel.weaponInUse = 0){
        return spit = document.getElementById("spit");
    }
    else if (heroModel.weaponInUse = 0){
        return waterbomb = document.getElementById("waterbomb");
    }
}