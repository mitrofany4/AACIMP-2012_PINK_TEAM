// weapon choosing
var slideImage = document.getElementById ("slide_image");

function setSpit (){
    spit = document.getElementById("spit");
    heroModel.weaponInUse = 0;
    slideImage.src = "images/spit_icon.png";
}

function setBomb (){
    waterbomb = document.getElementById("waterbomb");
    heroModel.weaponInUse = 1;
    if (bombAmount !=0){
        slideImage.src = "images/waterbomb_icon.png";
    }
}

function setTomato (){
    tomato = document.getElementById("tomato");
    heroModel.weaponInUse = 2;
    if (tomatoAmount !=0){
        slideImage.src = "images/tomato_icon.png";
    }
}