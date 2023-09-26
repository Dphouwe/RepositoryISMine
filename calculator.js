//parsefloat

//document.getElementById("button1").onclick = function () { alert('hello!'); };

function  button() {



    var un1 =document.getElementById("un");
    var dos1 =document.getElementById("dos");

    var number1 = parseFloat(un1.value);
    var number2 = parseFloat(dos1.value);

    var answer = number1 -  (number2 / 100) * number1;
    var resulto = document.getElementById("resulto")



    resulto.value = answer.toFixed(2) 
}