var myTextArea=document.getElementById("montexte");
var selectsize=document.getElementById("size");
var selectfont=document.getElementById("font");

function textisbold(){
    myTextArea.style.fontWeight="bold";
    }

function textisitalic(){
    myTextArea.style.fontStyle="italic";
}

function textisunderlined(){
    myTextArea.style.textDecoration="underline";
}

function changesize(){
    myTextArea.style.fontSize=selectsize.value;
}

function changefont(){
    myTextArea.style.fontFamily=selectfont.value;
}