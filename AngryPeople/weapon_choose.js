var selected;

function setSpit (){
    selected = 0;
    heroModel.weaponInUse = 0;
    spit = document.getElementById("spit");
    return selected;
}

function setBomb (){
    selected = 1;
    heroModel.weaponInUse = 1;
    spit = document.getElementById("waterbomb");
    return selected;
}
