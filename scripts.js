var boolVar1 = false;
var boolVar2 = false;
var boolVar3 = false;
var boolVar4 = false;

var media = window.matchMedia("(max-width: 680px)")

function circle1Clicked(){
    this.boolVar1 = true;
    var arr1 = document.getElementById("arrow1");
    if(media.matches){
        var position1 = 130;
    }else{
        var position1 = 1000;
    }
    var moving1 = setInterval(move1, 0);

    function move1(){
        position1--;
        arr1.style.marginLeft=position1+"px";
        if(position1===0){
            clearInterval(moving1);
            var crr1 = document.getElementById("circle1").style.background="aqua";
        }
        console.log(position1);
    }
    
    
    if (boolVar1 == true) {
        var crr2 = document.getElementById("circle2").style.background="blue";
        var arr2 = document.getElementById("arrow2").style.marginLeft="auto";
    
        var crr3 = document.getElementById("circle3").style.background="red";
        var arr3 = document.getElementById("arrow3").style.marginLeft="auto";
    
        var crr4 = document.getElementById("circle4").style.background="green";
        var arr4 = document.getElementById("arrow4").style.marginLeft="auto";
    }
    else{
        boolVar1=false;
    }
}

function circle2Clicked(){
    this.boolVar2 = true;
    var arr2 = document.getElementById("arrow2");
    if(media.matches){
        var position2 = 130;
    }else{
        var position2 = 1000;
    }
    var moving2 = setInterval(move2, 0);

    function move2(){
        position2--;
        arr2.style.marginLeft=position2+"px";
        if(position2===0){
            clearInterval(moving2);
            var crr2 = document.getElementById("circle2").style.background="black";
        }
        console.log(position2);
    }
    
    if (boolVar2 == true) {
        var crr1 = document.getElementById("circle1").style.background="yellow";
        var arr1 = document.getElementById("arrow1").style.marginLeft="auto";
    
        var crr3 = document.getElementById("circle3").style.background="red";
        var arr3 = document.getElementById("arrow3").style.marginLeft="auto";
    
        var crr4 = document.getElementById("circle4").style.background="green";
        var arr4 = document.getElementById("arrow4").style.marginLeft="auto";
    }
    else{
        boolVar2=false;
    }
}

function circle3Clicked(){
    this.boolVar3 = true;
    var arr3 = document.getElementById("arrow3");
    if(media.matches){
        var position3 = 130;
    }else{
        var position3 = 1000;
    }
    var moving3 = setInterval(move3, 0);

    function move3(){
        position3--;
        arr3.style.marginLeft=position3+"px";
        if(position3===0){
            clearInterval(moving3);
            var crr3 = document.getElementById("circle3").style.background="grey";
        }
        console.log(position3);
    }
    

    if (boolVar3 == true) {
        var crr1 = document.getElementById("circle1").style.background="yellow";
        var arr1 = document.getElementById("arrow1").style.marginLeft="auto";
    
        var crr2 = document.getElementById("circle2").style.background="blue";
        var arr2 = document.getElementById("arrow2").style.marginLeft="auto";
    
        var crr4 = document.getElementById("circle4").style.background="green";
        var arr4 = document.getElementById("arrow4").style.marginLeft="auto";
    }
    else{
        boolVar3=false;
    }
}

function circle4Clicked(){
    this.boolVar4 = true;
    var arr4 = document.getElementById("arrow4");
    if(media.matches){
        var position4 = 130;
    }else{
        var position4 = 1000;
    }
    var moving4 = setInterval(move4, 0);

    function move4(){
        position4--;
        arr4.style.marginLeft=position4+"px";
        if(position4===0){
            clearInterval(moving4);
            var crr4 = document.getElementById("circle4").style.background="brown";
        }
        console.log(position4);
    }

    if (boolVar4 == true) {
        var crr1 = document.getElementById("circle1").style.background="yellow";
        var arr1 = document.getElementById("arrow1").style.marginLeft="auto";
    
        var crr2 = document.getElementById("circle2").style.background="blue";
        var arr2 = document.getElementById("arrow2").style.marginLeft="auto";
    
        var crr3 = document.getElementById("circle3").style.background="red";
        var arr3 = document.getElementById("arrow3").style.marginLeft="auto";
    }
    else{
        boolVar4=false;
    }
}


function resetSettings(){
    document.location.href="index.html";
}

